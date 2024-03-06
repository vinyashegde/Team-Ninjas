import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, query, orderBy, onSnapshot, doc, getDoc } from 'firebase/firestore';

const QuestionList = ({ firebaseApp }) => {
  const [questions, setQuestions] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Listen for changes to the authentication state
    const auth = getAuth(firebaseApp);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => {
      // Unsubscribe when the component is unmounted
      unsubscribe();
    };
  }, [firebaseApp]);

  useEffect(() => {
    // Listen for changes to the questions collection
    const db = getFirestore(firebaseApp);
    const q = query(collection(db, 'questions'), orderBy('timestamp', 'desc'));

    const unsubscribe = onSnapshot(q, async (snapshot) => {
      const newQuestions = await Promise.all(snapshot.docs.map(async (doc) => {
        const questionData = doc.data();
        const userData = await getUserData(questionData.userId);
        return { id: doc.id, ...questionData, user: userData };
      }));
      setQuestions(newQuestions);
    });

    return () => {
      // Unsubscribe when the component is unmounted
      unsubscribe();
    };
  }, [firebaseApp]);

  const getUserData = async (userId) => {
    const db = getFirestore(firebaseApp);
    const userDoc = doc(db, 'users', userId);
    const userSnap = await getDoc(userDoc);

    if (userSnap.exists()) {
      return userSnap.data().name; // Assuming 'name' is the field in the 'users' collection
    }

    return null;
  };

  return (
    <div className="my-8">
      <h2 className="text-3xl font-semibold mb-4">Recent Questions</h2>
      {questions.map((question) => (
        <div key={question.id} className="mb-4 p-4 border rounded">
          <p>{question.question}</p>
          <p className="text-gray-500 text-sm mt-2">
            Asked by: {question.user || 'Unknown User'}
          </p>
        </div>
      ))}
    </div>
  );
};

export default QuestionList;
