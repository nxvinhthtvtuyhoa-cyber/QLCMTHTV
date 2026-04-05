import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase mới của bạn
const firebaseConfig = {
  apiKey: "AIzaSyAf656sHIz2xihPbyY359kpEUUM3Vk8yOU",
  authDomain: "qlcmthtv-7766e.firebaseapp.com",
  projectId: "qlcmthtv-7766e",
  storageBucket: "qlcmthtv-7766e.firebasestorage.app",
  messagingSenderId: "60295783033",
  appId: "1:60295783033:web:85ab055b9d9eb738256aa8",
};

// kết nối firebase
const app = initializeApp(firebaseConfig);

// tạo database (Firestore)
export const db = getFirestore(app);
