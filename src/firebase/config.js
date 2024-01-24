// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsA-6ZPJY4VGIooFHhQNQm7uqlNZcfAZk",
  authDomain: "timetableproject-8bd30.firebaseapp.com",
  projectId: "timetableproject-8bd30",
  storageBucket: "timetableproject-8bd30.appspot.com",
  messagingSenderId: "11366968604",
  appId: "1:11366968604:web:2ae11d2c92193aabc75ed9"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();

export default db;