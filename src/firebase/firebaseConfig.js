// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOQ3ceFouhO5lSuDvqz5sj94AmqPN4CsM",
  authDomain: "moduloapoyosevidorp.firebaseapp.com",
  projectId: "moduloapoyosevidorp",
  storageBucket: "moduloapoyosevidorp.appspot.com",
  messagingSenderId: "904173375972",
  appId: "1:904173375972:web:1ad787d49c76d2392f37f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);