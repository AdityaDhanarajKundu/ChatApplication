// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCi9jOqxY1-A9Xo_X7Hvjf3f4hjKxqet7Y",
  authDomain: "chat-39776.firebaseapp.com",
  projectId: "chat-39776",
  storageBucket: "chat-39776.appspot.com",
  messagingSenderId: "320463316361",
  appId: "1:320463316361:web:11ae9a800c3953621dad58"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();  // auth object/instance