// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-imHArA9MyAyeTCJdYWYOSzT5riINH7Q",
  authDomain: "ts33k-efc7c.firebaseapp.com",
  projectId: "ts33k-efc7c",
  storageBucket: "ts33k-efc7c.appspot.com",
  messagingSenderId: "846368585363",
  appId: "1:846368585363:web:701581988a1b62d3097f66",
  measurementId: "G-NMNDMF7YG4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
export {app,auth}
