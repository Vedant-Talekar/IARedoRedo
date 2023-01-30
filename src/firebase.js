// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyBgBdr3voOQNNeYM2hqueo7wcE0138HJQg",
    authDomain: "order-app-cca05.firebaseapp.com",
    projectId: "order-app-cca05",
    storageBucket: "order-app-cca05.appspot.com",
    messagingSenderId: "175219184142",
    appId: "1:175219184142:web:65e9f4333424ce6721e25f"
  };



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)