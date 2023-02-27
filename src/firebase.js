// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMCGcBHZ8z9nw9vZYKyJUySy-dBsFaGiY",
  authDomain: "newfireproject-ecc03.firebaseapp.com",
  projectId: "newfireproject-ecc03",
  storageBucket: "newfireproject-ecc03.appspot.com",
  messagingSenderId: "994706352537",
  appId: "1:994706352537:web:ec16c749841e90b4b74b08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// https://firebase.google.com/docs/web/setup#available-libraries
export const db = getFirestore(app);
