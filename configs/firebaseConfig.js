// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-projects-e4f08.firebaseapp.com",
  projectId: "ai-projects-e4f08",
  storageBucket: "ai-projects-e4f08.firebasestorage.app",
  messagingSenderId: "782737985494",
  appId: "1:782737985494:web:f764a2e9c927fcadc0de77",
  measurementId: "G-TF31YCBFDB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
