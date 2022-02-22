import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-XnZhCp5aO6bjHYp1XmT0Bx_WgwSHXow",
  authDomain: "challenge-e932f.firebaseapp.com",
  projectId: "challenge-e932f",
  storageBucket: "challenge-e932f.appspot.com",
  messagingSenderId: "679485018389",
  appId: "1:679485018389:web:d220144b346b844555591c",
  measurementId: "G-DLXMLFKS7S"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
