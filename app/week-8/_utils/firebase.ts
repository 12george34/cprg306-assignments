"use client";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { AuthContextProvider } from "./AuthContextProvider"; // no .tsx extension needed

const firebaseConfig = {
    apiKey: "AIzaSyDmU2K4kl2VefQDEQcblbqTdEWHCO2F1Gc",
    authDomain: "cprg306-assignments-16d7c.firebaseapp.com",
    projectId: "cprg306-assignments-16d7c",
    storageBucket: "cprg306-assignments-16d7c.firebasestorage.app",
    messagingSenderId: "174068958569",
    appId: "1:174068958569:web:3f5aaef9708df68effe9f8",
    measurementId: "G-B5YMB7HVB7"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
export const auth = getAuth(app);

export default app;