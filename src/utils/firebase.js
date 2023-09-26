// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "techcityhq.firebaseapp.com",
  projectId: "techcityhq",
  storageBucket: "techcityhq.appspot.com",
  messagingSenderId: "386197738520",
  appId: "1:386197738520:web:84afb502e01906f0745f6d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);