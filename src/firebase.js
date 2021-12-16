import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCYZjxUdrEOJFqNL2_WVi838vCO08NXhzc",
  authDomain: "samp2-d89b9.firebaseapp.com",
  projectId: "samp2-d89b9",
  storageBucket: "samp2-d89b9.appspot.com",
  messagingSenderId: "832458155520",
  appId: "1:832458155520:web:efdd3af9d5a3ec063d1ae5",
  measurementId: "G-W9V3P48W9E"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

export { db };