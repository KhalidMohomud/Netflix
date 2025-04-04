// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth/cordova";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKulZa1GVTiaIZ3gkhhmeT5oMUvlQK5F4",
  authDomain: "netflix-clone-db234.firebaseapp.com",
  projectId: "netflix-clone-db234",
  storageBucket: "netflix-clone-db234.firebasestorage.app",
  messagingSenderId: "567041472170",
  appId: "1:567041472170:web:91b74d3e48de956ca402d3",
  measurementId: "G-CK0Q480YD2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore()