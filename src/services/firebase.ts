// Import the functions you need from the SDKs you need
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "senses-and-feelings.firebaseapp.com",
  projectId: "senses-and-feelings",
  storageBucket: "senses-and-feelings.appspot.com",
  messagingSenderId: "919923090207",
  appId: "1:919923090207:web:bfac5b7fb96ad2558b062a",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const storage = getStorage();
