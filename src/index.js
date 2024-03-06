import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, setPersistence, browserSessionPersistence } from 'firebase/auth';
import './index.css';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2RepauxpuNYlwgVKjWh95lyJ-iyOWLfc",
  authDomain: "campus-bd3a0.firebaseapp.com",
  projectId: "campus-bd3a0",
  storageBucket: "campus-bd3a0.appspot.com",
  messagingSenderId: "820491166189",
  appId: "1:820491166189:web:ece6cb2659b0bf7bb907e4",
  measurementId: "G-LMMLV2SW5N"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Set the authentication persistence to 'SESSION'
setPersistence(auth, browserSessionPersistence)
  .then(() => {
    // Session persistence successfully set
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  })
  .catch((error) => {
    // Handle errors
    console.error('Error setting persistence:', error.message);
  });
