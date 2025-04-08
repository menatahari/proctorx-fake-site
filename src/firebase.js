// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHakqCaLeceJJlcwTsUTwJ3TAuQSsI6Qg",
  authDomain: "proctorx-fake-website.firebaseapp.com",
  projectId: "proctorx-fake-website",
  storageBucket: "proctorx-fake-website.firebasestorage.app",
  messagingSenderId: "427231942809",
  appId: "1:427231942809:web:ffa05c3ee8bc3dbee3c008",
  measurementId: "G-1R2QCGSRDQ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs };