"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { db } from "@/lib/firebase";
import { collection, getDocs, doc } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function SleepCalendarPage() {
  const { user } = useAuth();
  const [logs, setLogs] = useState({});
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!user) return;

    const fetchSleepLogs = async () => {
      setLoading(true);
      try {
        const userDoc = doc(db, "sleepLogs", user.uid);

        // Firestore sleep logs are stored as subcollections under each date
        // So we first get all date subcollections
        const datesSnapshot = await getDocs(collection(db, "sleepLogs", user.uid));
        let allLogs = {};

        for (const dateDoc of datesSnapshot.docs) {
          const date = dateDoc.id;
          const dayLogsSnap = await getDocs(collection(userDoc, date));
          const entries = dayLogsSnap.docs.map((d) => d.data());

          // Take the average sleep duration of the day (in case multiple entries)
          const avgDuration =
            entries.reduce((sum, e) => sum + e.duration, 0) / entries.length;

          allLogs[date] = avgDuration.toFixed(1);
        }

        setLogs(allLogs);
      } catch (err) {
        console.error("Error fetching sleep logs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSleepLogs();
  }, [user]);

  if (!user) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-white text-lg">⚠️ Please log in to view your sleep calendar.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-white mb-6">📅 Sleep Calendar</h1>

      {loading ? (
        <p className="text-white">⏳ Loading...</p>
      ) : Object.keys(logs).length === 0 ? (
        <p className="text-white">No sleep logs yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-3xl">
          {Object.entries(logs).map(([date, duration]) => (
            <div
              key={date}
              className="bg-white/20 backdrop-blur-lg p-4 rounded-xl shadow-lg text-white flex flex-col items-center"
            >
              <p className="text-lg font-bold">{date}</p>
              <p className="text-xl">😴 {duration} hrs</p>
              <p
                className={`mt-2 px-3 py-1 rounded-full text-sm ${
                  duration >= 7
                    ? "bg-green-500/80"
                    : duration >= 5
                    ? "bg-yellow-500/80"
                    : "bg-red-500/80"
                }`}
              >
                {duration >= 7
                  ? "✅ Healthy sleep"
                  : duration >= 5
                  ? "⚠️ Moderate sleep"
                  : "❌ Poor sleep"}
              </p>
            </div>
          ))}
        </div>
      )}

      <button
        onClick={() => router.push("/dashboard")}
        className="mt-6 px-4 py-2 bg-red-600 rounded-lg hover:bg-red-500 transition"
      >
        ⬅ Go Back
      </button>
    </main>
  );
}
