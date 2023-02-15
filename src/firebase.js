// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACFmAWY15g3-JElYNwOie-NMA1DzNdIYE",
  authDomain: "cs-ia-160b5.firebaseapp.com",
  projectId: "cs-ia-160b5",
  storageBucket: "cs-ia-160b5.appspot.com",
  messagingSenderId: "372710353483",
  appId: "1:372710353483:web:eb041b516b97e943ec3bce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
