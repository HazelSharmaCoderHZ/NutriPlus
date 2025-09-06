"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { signInEmail, signInWithGoogle } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
  let mounted = true;

  const timer = setTimeout(() => {
    if (mounted) setShowLoader(false);
  }, 3000);

  return () => {
    mounted = false;
    clearTimeout(timer);
  };
}, []);

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setErr(null);
    try {
      await signInEmail(email, password);
      router.replace("/dashboard");
    } catch (error: any) {
      setErr(error?.message ?? "Login failed");
    } finally {
      setBusy(false);
    }
  };

  const handleGoogle = async () => {
    setBusy(true);
    setErr(null);
    try {
      await signInWithGoogle();
      router.replace("/dashboard");
    } catch (error: any) {
      setErr(error?.message ?? "Google sign-in failed");
    } finally {
      setBusy(false);
    }
  };

  if (showLoader) {
    return (
     <div className="flex  flex-col md:flex-row"> 
    <div className="flex items-center  justify-center h-screen w-screen ">
      <svg
        width="480"
        height="480"
        viewBox="-5 -5 40 40"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]"
      >
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="400%" height="400%">
            <feGaussianBlur stdDeviation="2" result="blur"></feGaussianBlur>
            <feMerge>
              <feMergeNode in="blur"></feMergeNode>
              <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
          </filter>
        </defs>

        
        <circle fill="#ffffffff" r="0.1" filter="url(#glow)">
          <animateMotion
            path="M 23.8 0.5 C 17.5 -1.4 1.4 20.9 9.9 27.3 C 14.2 30.5 21.9 22.9 23.8 17.8 C 28 7 2.1 3.3 0.4 11.6 C -0.4 15.9 10 18.3 12.6 18.7 C 25.2 20.5 31.5 2.9 23.8 0.5 Z"
            repeatCount="indefinite"
            dur="3.5s"
          />
        </circle>
        <circle fill="#b599caff" r="0.15" filter="url(#glow)">
          <animateMotion
            path="M 23.8 0.5 C 17.5 -1.4 1.4 20.9 9.9 27.3 C 14.2 30.5 21.9 22.9 23.8 17.8 C 28 7 2.1 3.3 0.4 11.6 C -0.4 15.9 10 18.3 12.6 18.7 C 25.2 20.5 31.5 2.9 23.8 0.5 Z"
            repeatCount="indefinite"
            begin="-0.05s"
            dur="3.5s"
          />
        </circle>
        <circle fill="#925bbeff" r="0.2" filter="url(#glow)">
          <animateMotion
            path="M 23.8 0.5 C 17.5 -1.4 1.4 20.9 9.9 27.3 C 14.2 30.5 21.9 22.9 23.8 17.8 C 28 7 2.1 3.3 0.4 11.6 C -0.4 15.9 10 18.3 12.6 18.7 C 25.2 20.5 31.5 2.9 23.8 0.5 Z"
            repeatCount="indefinite"
            begin="-0.1s"
            dur="3.5s"
          />
        </circle>
        <circle fill="#68e8a3ff" r="0.25" filter="url(#glow)">
          <animateMotion
            path="M 23.8 0.5 C 17.5 -1.4 1.4 20.9 9.9 27.3 C 14.2 30.5 21.9 22.9 23.8 17.8 C 28 7 2.1 3.3 0.4 11.6 C -0.4 15.9 10 18.3 12.6 18.7 C 25.2 20.5 31.5 2.9 23.8 0.5 Z"
            repeatCount="indefinite"
            begin="-0.15s"
            dur="3.5s"
          />
        </circle>
        <circle fill="#00ffaeff" r="0.3" filter="url(#glow)">
          <animateMotion
            path="M 23.8 0.5 C 17.5 -1.4 1.4 20.9 9.9 27.3 C 14.2 30.5 21.9 22.9 23.8 17.8 C 28 7 2.1 3.3 0.4 11.6 C -0.4 15.9 10 18.3 12.6 18.7 C 25.2 20.5 31.5 2.9 23.8 0.5 Z"
            repeatCount="indefinite"
            begin="-0.2s"
            dur="3.5s"
          />
        </circle>
        <circle fill="#00b7eb" r="0.35" filter="url(#glow)">
          <animateMotion
            path="M 23.8 0.5 C 17.5 -1.4 1.4 20.9 9.9 27.3 C 14.2 30.5 21.9 22.9 23.8 17.8 C 28 7 2.1 3.3 0.4 11.6 C -0.4 15.9 10 18.3 12.6 18.7 C 25.2 20.5 31.5 2.9 23.8 0.5 Z"
            repeatCount="indefinite"
            begin="-0.25s"
            dur="3.5s"
          />
        </circle>
        
      </svg>
    </div>
    <div className="flex items-center  justify-center h-screen w-screen ">
      <svg
        width="350"
        height="350"
        viewBox="-5 -15 40 40"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]"
      >
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="400%" height="400%">
            <feGaussianBlur stdDeviation="2" result="blur"></feGaussianBlur>
            <feMerge>
              <feMergeNode in="blur"></feMergeNode>
              <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
          </filter>
        </defs>

        
        <circle fill="#ffffffff" r="0.1" filter="url(#glow)">
          <animateMotion
            path="M 23.8 0.5 C 17.5 -1.4 1.4 20.9 9.9 27.3 C 14.2 30.5 21.9 22.9 23.8 17.8 C 28 7 2.1 3.3 0.4 11.6 C -0.4 15.9 10 18.3 12.6 18.7 C 25.2 20.5 31.5 2.9 23.8 0.5 Z"
            repeatCount="indefinite"
            dur="3.5s"
          />
        </circle>
        <circle fill="#b599caff" r="0.15" filter="url(#glow)">
          <animateMotion
            path="M 23.8 0.5 C 17.5 -1.4 1.4 20.9 9.9 27.3 C 14.2 30.5 21.9 22.9 23.8 17.8 C 28 7 2.1 3.3 0.4 11.6 C -0.4 15.9 10 18.3 12.6 18.7 C 25.2 20.5 31.5 2.9 23.8 0.5 Z"
            repeatCount="indefinite"
            begin="-0.05s"
            dur="3.5s"
          />
        </circle>
        <circle fill="#925bbeff" r="0.2" filter="url(#glow)">
          <animateMotion
            path="M 23.8 0.5 C 17.5 -1.4 1.4 20.9 9.9 27.3 C 14.2 30.5 21.9 22.9 23.8 17.8 C 28 7 2.1 3.3 0.4 11.6 C -0.4 15.9 10 18.3 12.6 18.7 C 25.2 20.5 31.5 2.9 23.8 0.5 Z"
            repeatCount="indefinite"
            begin="-0.1s"
            dur="3.5s"
          />
        </circle>
        <circle fill="#68e8a3ff" r="0.25" filter="url(#glow)">
          <animateMotion
            path="M 23.8 0.5 C 17.5 -1.4 1.4 20.9 9.9 27.3 C 14.2 30.5 21.9 22.9 23.8 17.8 C 28 7 2.1 3.3 0.4 11.6 C -0.4 15.9 10 18.3 12.6 18.7 C 25.2 20.5 31.5 2.9 23.8 0.5 Z"
            repeatCount="indefinite"
            begin="-0.15s"
            dur="3.5s"
          />
        </circle>
        <circle fill="#00ffaeff" r="0.3" filter="url(#glow)">
          <animateMotion
            path="M 23.8 0.5 C 17.5 -1.4 1.4 20.9 9.9 27.3 C 14.2 30.5 21.9 22.9 23.8 17.8 C 28 7 2.1 3.3 0.4 11.6 C -0.4 15.9 10 18.3 12.6 18.7 C 25.2 20.5 31.5 2.9 23.8 0.5 Z"
            repeatCount="indefinite"
            begin="-0.2s"
            dur="3.5s"
          />
        </circle>
        <circle fill="#00b7eb" r="0.35" filter="url(#glow)">
          <animateMotion
            path="M 23.8 0.5 C 17.5 -1.4 1.4 20.9 9.9 27.3 C 14.2 30.5 21.9 22.9 23.8 17.8 C 28 7 2.1 3.3 0.4 11.6 C -0.4 15.9 10 18.3 12.6 18.7 C 25.2 20.5 31.5 2.9 23.8 0.5 Z"
            repeatCount="indefinite"
            begin="-0.25s"
            dur="3.5s"
          />
        </circle>
        
      </svg>
    </div>
    <div className="flex items-center  justify-center h-screen w-screen ">
      <svg
        width="480"
        height="480"
        viewBox="-5 -5 40 40"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]"
      >
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="400%" height="400%">
            <feGaussianBlur stdDeviation="2" result="blur"></feGaussianBlur>
            <feMerge>
              <feMergeNode in="blur"></feMergeNode>
              <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
          </filter>
        </defs>

        
        <circle fill="#ffffffff" r="0.1" filter="url(#glow)">
          <animateMotion
            path="M 23.8 0.5 C 17.5 -1.4 1.4 20.9 9.9 27.3 C 14.2 30.5 21.9 22.9 23.8 17.8 C 28 7 2.1 3.3 0.4 11.6 C -0.4 15.9 10 18.3 12.6 18.7 C 25.2 20.5 31.5 2.9 23.8 0.5 Z"
            repeatCount="indefinite"
            dur="3.5s"
          />
        </circle>
        <circle fill="#b599caff" r="0.15" filter="url(#glow)">
          <animateMotion
            path="M 23.8 0.5 C 17.5 -1.4 1.4 20.9 9.9 27.3 C 14.2 30.5 21.9 22.9 23.8 17.8 C 28 7 2.1 3.3 0.4 11.6 C -0.4 15.9 10 18.3 12.6 18.7 C 25.2 20.5 31.5 2.9 23.8 0.5 Z"
            repeatCount="indefinite"
            begin="-0.05s"
            dur="3.5s"
          />
        </circle>
        <circle fill="#925bbeff" r="0.2" filter="url(#glow)">
          <animateMotion
            path="M 23.8 0.5 C 17.5 -1.4 1.4 20.9 9.9 27.3 C 14.2 30.5 21.9 22.9 23.8 17.8 C 28 7 2.1 3.3 0.4 11.6 C -0.4 15.9 10 18.3 12.6 18.7 C 25.2 20.5 31.5 2.9 23.8 0.5 Z"
            repeatCount="indefinite"
            begin="-0.1s"
            dur="3.5s"
          />
        </circle>
        <circle fill="#68e8a3ff" r="0.25" filter="url(#glow)">
          <animateMotion
            path="M 23.8 0.5 C 17.5 -1.4 1.4 20.9 9.9 27.3 C 14.2 30.5 21.9 22.9 23.8 17.8 C 28 7 2.1 3.3 0.4 11.6 C -0.4 15.9 10 18.3 12.6 18.7 C 25.2 20.5 31.5 2.9 23.8 0.5 Z"
            repeatCount="indefinite"
            begin="-0.15s"
            dur="3.5s"
          />
        </circle>
        <circle fill="#00ffaeff" r="0.3" filter="url(#glow)">
          <animateMotion
            path="M 23.8 0.5 C 17.5 -1.4 1.4 20.9 9.9 27.3 C 14.2 30.5 21.9 22.9 23.8 17.8 C 28 7 2.1 3.3 0.4 11.6 C -0.4 15.9 10 18.3 12.6 18.7 C 25.2 20.5 31.5 2.9 23.8 0.5 Z"
            repeatCount="indefinite"
            begin="-0.2s"
            dur="3.5s"
          />
        </circle>
        <circle fill="#00b7eb" r="0.35" filter="url(#glow)">
          <animateMotion
            path="M 23.8 0.5 C 17.5 -1.4 1.4 20.9 9.9 27.3 C 14.2 30.5 21.9 22.9 23.8 17.8 C 28 7 2.1 3.3 0.4 11.6 C -0.4 15.9 10 18.3 12.6 18.7 C 25.2 20.5 31.5 2.9 23.8 0.5 Z"
            repeatCount="indefinite"
            begin="-0.25s"
            dur="3.5s"
          />
        </circle>
        
      </svg>
    </div>
    </div>
  );
  }

  return (
    <main className="mx-auto max-w-md px-6 py-16">
      <h1 className="text-3xl font-semibold">Log in</h1>
      <form onSubmit={handleEmailLogin} className="mt-6 space-y-4">
        <input
          className="w-full rounded-2xl border px-4 py-2"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="w-full rounded-2xl border px-4 py-2"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {err && <p className="text-sm text-red-600">{err}</p>}
        <button disabled={busy} className="w-full rounded-2xl border px-4 py-2">
          {busy ? "Please wait..." : "Log in"}
        </button>
      </form>

      <div className="mt-6">
        <button onClick={handleGoogle} className="w-full rounded-2xl border px-4 py-2">
          Continue with Google
        </button>
      </div>

      <p className="mt-4 text-sm">
        Don’t have an account? <a className="underline" href="/signup">Sign up</a>
      </p>
    </main>
  );
}
