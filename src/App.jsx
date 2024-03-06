// App.js
import React from 'react';
import "./App.css";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Question from './components/Question';
import QuestionList from './components/QuestionList';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function App({ firebaseApp }) {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const auth = getAuth(firebaseApp);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, [firebaseApp]);

  return (
    <div className="container mx-auto">
      <Navbar />
      <Hero />
      {user && <Question firebaseApp={firebaseApp} />}
      <QuestionList firebaseApp={firebaseApp} />
      <Footer />
    </div>
  );
}

export default App;
