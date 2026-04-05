// lib/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAf656sHIz2xihPbyY359kpEUUM3Vk8yOU",
  authDomain: "qlcmthtv-7766e.firebaseapp.com",
  projectId: "qlcmthtv-7766e",
  storageBucket: "qlcmthtv-7766e.firebasestorage.app",
  messagingSenderId: "60295783033",
  appId: "1:60295783033:web:85ab055b9d9eb738256aa8",
  measurementId: "G-KH4SMKXVP8"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
