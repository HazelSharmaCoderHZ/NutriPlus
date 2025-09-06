// src/lib/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import analytics conditionally
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCNnndGS9zB_hDNmByYmYIYzRo-Cslo37Q",
  authDomain: "healthplus-42ae6.firebaseapp.com",
  projectId: "healthplus-42ae6",
  storageBucket: "healthplus-42ae6.firebasestorage.app",
  messagingSenderId: "537306765031",
  appId: "1:537306765031:web:9c9654ff0b5f839805f442",
  measurementId: "G-LM9BMN9EPV"
};

// Prevent initializing multiple times during HMR
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Auth works everywhere (SSR safe)
export const auth = getAuth(app);

// Analytics only works in browser (CSR only)
export const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;
