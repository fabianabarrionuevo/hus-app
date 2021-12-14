// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAehoLxiQtC_BR-i5S_soPkhxD74zL8aG4",
  authDomain: "cakestore-rj.firebaseapp.com",
  projectId: "cakestore-rj",
  storageBucket: "cakestore-rj.appspot.com",
  messagingSenderId: "690963342159",
  appId: "1:690963342159:web:c61872bd97dfffc9acdb3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);