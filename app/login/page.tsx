"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    const res = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    if (res?.error) {
      setError("Identifiants incorrects");
      return;
    }

    if (res?.ok) {
      window.location.href = "/admin";
    }
  }

  return (
    <>
      <h1>Page de Login</h1>

      {error &&
        <p className="bg-red-800 p-2">
          {error}
        </p>
      }

      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Nom</label>
          <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
        </div>

        <div>
          <label htmlFor="password">Mot de passe</label>
          <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        </div>

        <button type="submit" className="border rounded-lg py-1 px-3">
          Se connecter
        </button>
      </form>
    </>
  );
}