import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBGh5esI7Zw7htVP6WTqIPo0sH9EAMmFUg",
  authDomain: "marine-7e925.firebaseapp.com",
  projectId: "marine-7e925",
  storageBucket: "marine-7e925.appspot.com",
  messagingSenderId: "222557268699",
  appId: "1:222557268699:web:99d9da0ee2d0d3e01d7afe",
  measurementId: "G-KJ5VHT74DC"
});

const db = firebaseApp.firestore();
const auth = firebase.auth()

export { db, auth };