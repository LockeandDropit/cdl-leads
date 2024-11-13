// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    getFirestore,
    initializeFirestore,
    connectFirestoreEmulator,
  } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRgSuQ35IlfSHHzdlI94KiaIAV9RIXlE4",
  authDomain: "cdl-leads.firebaseapp.com",
  projectId: "cdl-leads",
  storageBucket: "cdl-leads.firebasestorage.app",
  messagingSenderId: "595442146122",
  appId: "1:595442146122:web:af7678810c81a579357fb3",
  measurementId: "G-6R20K4D2CM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

const analytics = getAnalytics(app);