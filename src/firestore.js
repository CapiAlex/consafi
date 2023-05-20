// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUcb_d5myDbboOdc0dON2N05tATMHsyfY",
  authDomain: "prjsalesasb.firebaseapp.com",
  projectId: "prjsalesasb",
  storageBucket: "prjsalesasb.appspot.com",
  messagingSenderId: "192190307908",
  appId: "1:192190307908:web:aef01cbe643df0e150a611",
  measurementId: "G-2454V05EKJ"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const firebaseApp = firebase.initializeApp(firebaseConfig); 
const db = firebaseApp.firestore();

export default db;