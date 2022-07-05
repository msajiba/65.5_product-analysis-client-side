// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7Z3NF8k7UKl3mIbAJNNALyX7-Q6CMnOo",
  authDomain: "product-analysis-d67e6.firebaseapp.com",
  projectId: "product-analysis-d67e6",
  storageBucket: "product-analysis-d67e6.appspot.com",
  messagingSenderId: "292530602493",
  appId: "1:292530602493:web:f36154d02da240c709d994"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;