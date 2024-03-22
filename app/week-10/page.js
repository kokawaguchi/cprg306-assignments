"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  function handleSignIn() {
    gitHubSignIn();
  }

  function handleSignOut() {
    firebaseSignOut();
  }

  return (
    <main className="h-screen flex items-center justify-center">
      <div className="h-56 flex flex-col items-center">
        <p>{user?.email}</p>
        {user ? (
          <div className="flex flex-col items-center">
            <div>
              <a className="hover:text-pink-100 text-cyan-900">
                <Link href="/week-10/shopping-list">Shopping List</Link>
              </a>
            </div>
            <button
              onClick={handleSignOut}
              className="text-cyan-900 hover:text-pink-100 "
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div>
            <button
              onClick={handleSignIn}
              className="text-cyan-900 hover:text-pink-100"
            >
              Sign In with GitHub
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
