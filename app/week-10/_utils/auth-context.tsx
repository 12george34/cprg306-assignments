"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { auth } from "./firebase";
import { signInWithPopup, signOut, onAuthStateChanged, GithubAuthProvider, User } from "firebase/auth";

// Context type
interface AuthContextType {
    user: User | null;
    gitHubSignIn: () => Promise<void>;
    firebaseSignOut: () => Promise<void>;
}

// Provider props
interface AuthProviderProps {
    children: ReactNode;
}

// Create context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider component
export const AuthContextProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null);

    const gitHubSignIn = async () => {
        const provider = new GithubAuthProvider();
        try {
            await signInWithPopup(auth, provider);
        } catch (error: any) {
            if (error.code === "auth/cancelled-popup-request") {
                console.warn("Popup already open. Complete the previous login first.");
            } else {
                console.error("GitHub sign-in error:", error);
            }
        }
    };





    const firebaseSignOut = async () => {
        await signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user, gitHubSignIn, firebaseSignOut }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook to use auth context
export const useUserAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useUserAuth must be used inside AuthContextProvider");
    return context;
};