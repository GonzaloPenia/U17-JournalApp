// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth/web-extension";
import {getFirestore} from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqKwUc7u_WXdtpq4DY7Z3-5mrRRNaCiBY",
  authDomain: "journalapp-3a7cf.firebaseapp.com",
  projectId: "journalapp-3a7cf",
  storageBucket: "journalapp-3a7cf.firebasestorage.app",
  messagingSenderId: "719991562054",
  appId: "1:719991562054:web:d6824321693d586c290f47"
};

// Initialize Firebase
export const FireBaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FireBaseApp);
export const FireBaseDB =  getFirestore(FireBaseApp);