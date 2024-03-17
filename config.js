// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAswTCD0g-EgHVXPZug_jkORl1WatnMLkg",
  authDomain: "period-app-2b99e.firebaseapp.com",
  projectId: "period-app-2b99e",
  storageBucket: "period-app-2b99e.appspot.com",
  messagingSenderId: "504759079034",
  appId: "1:504759079034:web:a1efbd90f4d15c93176bc3",
  measurementId: "G-Q66TSH75SL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);