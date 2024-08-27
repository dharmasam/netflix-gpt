// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBC8ASZXiRq1r1PZJNLHib9KyOsANQ_0lU",
  authDomain: "netflixgpt-2c364.firebaseapp.com",
  projectId: "netflixgpt-2c364",
  storageBucket: "netflixgpt-2c364.appspot.com",
  messagingSenderId: "114140012886",
  appId: "1:114140012886:web:5a5422626f4563ff76b6f7",
  measurementId: "G-S2BMVPXYPW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();