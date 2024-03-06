import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Question = ({ firebaseApp }) => {
  const [newQuestion, setNewQuestion] = useState('');
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

  const handleAsk = async () => {
    if (!user) {
      console.log('User not logged in');
      return;
    }

    try {
      const db = getFirestore(firebaseApp);
      const questionsCollection = collection(db, 'questions');

      await addDoc(questionsCollection, {
        userId: user.uid,
        question: newQuestion,
        timestamp: serverTimestamp(),
      });

      // Clear the input field after successfully asking the question
      setNewQuestion('');
    } catch (error) {
      console.error('Error asking question:', error.message);
    }
  };

  return (
    <div className="my-8">
      <h2 className="text-3xl font-semibold mb-4">Ask a Question</h2>
      <textarea
        className="w-full p-4 border rounded"
        placeholder="Type your question here..."
        value={newQuestion}
        onChange={(e) => setNewQuestion(e.target.value)}
      />
      <button
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleAsk}
      >
        Ask
      </button>
    </div>
  );
};

export default Question;
