import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDBqCxrt-PcDbFo5iDIicT7iaAAXnDaTFA",
  authDomain: "projeto-web-5d62a.firebaseapp.com",
  projectId: "projeto-web-5d62a",
  storageBucket: "projeto-web-5d62a.firebasestorage.app",
  messagingSenderId: "1085863111213",
  appId: "1:1085863111213:web:ef835a83b119a95a6b26a4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
