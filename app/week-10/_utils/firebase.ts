// app/week-10/_utils/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDmU2K4kl2VefQDEQcblbqTdEWHCO2F1Gc",
    authDomain: "cprg306-assignments-16d7c.firebaseapp.com",
    projectId: "cprg306-assignments-16d7c",
    storageBucket: "cprg306-assignments-16d7c.firebasestorage.app",
    messagingSenderId: "174068958569",
    appId: "1:174068958569:web:3f5aaef9708df68effe9f8",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const db = getFirestore(app);
export const auth = getAuth(app);