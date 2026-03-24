"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const handleSignIn = async () => {
        await gitHubSignIn();
    };

    const handleSignOut = async () => {
        await firebaseSignOut();
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            {!user ? (
                <button onClick={handleSignIn}
                    className="">
                    Login with GitHub</button>


            ) : (
                <div>
                    <p>
                        Welcome, {user.displayName} ({user.email})
                    </p>
                    <button onClick={handleSignOut}>Logout</button>
                    <p></p>

                    <Link href="/week-8/shopping-list/">
                        <button> Shopping List</button>
                    </Link>


                </div>
            )}
        </div>
    );
}