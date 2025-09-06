"use client";

import Protected from "@/components/Protected";
import { useAuth } from "@/context/AuthContext";

export default function DashboardPage() {
  const { user, signOutUser } = useAuth();

  return (
    <Protected>
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <p className="mt-2">Welcome, {user?.email ?? user?.displayName} 👋</p>

        <button
          onClick={signOutUser}
          className="mt-6 rounded-2xl border px-5 py-2"
        >
          Sign out
        </button>
      </main>
    </Protected>
  );
}
