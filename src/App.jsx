// App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Question from './components/Question';
import QuestionList from './components/QuestionList';
import Login from './components/Login';
import Signup from './components/Signup';
import Calendar from './components/Calendar';
import Home from './components/Home';

import { getAuth, onAuthStateChanged } from 'firebase/auth';

const App = ({ firebaseApp }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth(firebaseApp);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, [firebaseApp]);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          {user && <Route path="/ask" element={<Question firebaseApp={firebaseApp} />} />}
          <Route path="/questions" element={<QuestionList firebaseApp={firebaseApp} />} />
          <Route path="/login" element={<Login firebaseApp={firebaseApp} />} />
          <Route path="/signup" element={<Signup firebaseApp={firebaseApp} />} />
          <Route path="/calendar" component={Home} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
