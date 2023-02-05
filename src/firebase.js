// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyCU60JSgxbg3pq8RVKESycOuIhykIItDhI',
  authDomain: 'forv-a2ac4.firebaseapp.com',
  projectId: 'forv-a2ac4',
  storageBucket: 'forv-a2ac4.appspot.com',
  messagingSenderId: '451957968123',
  appId: '1:451957968123:web:9f6f108c4884014400345e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
