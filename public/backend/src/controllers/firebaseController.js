// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrI3xmnwGKMAEawup5LIXjwCDjJHePK7g",
  authDomain: "converter-fbb27.firebaseapp.com",
  projectId: "converter-fbb27",
  storageBucket: "converter-fbb27.appspot.com",
  messagingSenderId: "46943231355",
  appId: "1:46943231355:web:9e2f1f27c2b091a541f1de",
  measurementId: "G-69NTT8S923"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);