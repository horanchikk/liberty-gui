import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDwc-fOoucmTbNo9ii93wGlX9jeaTWKBpY",
  authDomain: "liberty-d7365.firebaseapp.com",
  projectId: "liberty-d7365",
  storageBucket: "liberty-d7365.appspot.com",
  messagingSenderId: "721545248510",
  appId: "1:721545248510:web:04bc59a701990c2e9d2faf",
  measurementId: "G-0TSKPRJXLP"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

export { db };