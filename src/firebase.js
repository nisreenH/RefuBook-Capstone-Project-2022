// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8YsobsXzBQWo7-yYNc0bEPHI36PR-TGY",
  authDomain: "refubook-a51b5.firebaseapp.com",
  projectId: "refubook-a51b5",
  storageBucket: "refubook-a51b5.appspot.com",
  messagingSenderId: "449333185859",
  appId: "1:449333185859:web:3c122d056e54ce146e33f6",
  measurementId: "G-1LW0ZVM399"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

export default db;