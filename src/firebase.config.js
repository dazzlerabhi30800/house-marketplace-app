// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXmdqUnhR4DC6Fy1Uznsav13C-6C8C83s",
  authDomain: "house-marketplace-app-80db6.firebaseapp.com",
  projectId: "house-marketplace-app-80db6",
  storageBucket: "house-marketplace-app-80db6.appspot.com",
  messagingSenderId: "340545612473",
  appId: "1:340545612473:web:fb42165400281873330968"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()