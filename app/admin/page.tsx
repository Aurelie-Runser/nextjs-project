"use client";

import { signOut } from "next-auth/react";

export default function Admin() {
  return (
    <>
      <h1>Page Admin Dashboard</h1>
      <p>cette page est sécurisée.</p>

      <hr />

      <button onClick={() => signOut({callbackUrl: "/login"})}>
        Se déconnecter
      </button>
    </>
  );
}
