// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArpVi4pLPZ450Q3oqMUHLrkVA4jvZMSPM",
  authDomain: "tasks-demo-a40c1.firebaseapp.com",
  projectId: "tasks-demo-a40c1",
  storageBucket: "tasks-demo-a40c1.appspot.com",
  messagingSenderId: "793576189894",
  appId: "1:793576189894:web:c6eab8f92402974e490cc7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
