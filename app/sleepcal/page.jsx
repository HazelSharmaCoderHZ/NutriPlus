"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { db } from "@/lib/firebase";
import { collection, getDocs, doc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import TopMenuButton from "../../components/TopMenuButton"; 

export default function SleepCalendarPage() {
  const { user } = useAuth();
  const [logs, setLogs] = useState({});
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (user) fetchSleepLogs();
  }, [user]);

  const fetchSleepLogs = async () => {
    try {
      setLoading(true);

      const userDoc = doc(db, "sleepLogs", user.uid);
      const today = new Date();
      const currentMonth = today.getMonth();
      const currentYear = today.getFullYear();

      let logsMap = {};

      for (let d = 1; d <= 31; d++) {
        const dateObj = new Date(currentYear, currentMonth, d);
        if (dateObj.getMonth() !== currentMonth) break;

        const dateKey = dateObj.toISOString().split("T")[0];
        const dayCollection = collection(userDoc, dateKey);
        const snap = await getDocs(dayCollection);

        if (!snap.empty) {
          let totalDuration = 0;
          snap.forEach((doc) => {
            totalDuration += doc.data().duration || 0;
          });
          logsMap[dateKey] = totalDuration;
        } else {
          logsMap[dateKey] = null; // no data
        }
      }

      setLogs(logsMap);
    } catch (err) {
      console.error("Error fetching sleep logs:", err);
    } finally {
      setLoading(false);
    }
  };

  const getColor = (hours) => {
    if (hours === null) return "bg-white/10 border border-white";
    if (hours < 6) return "bg-red-500 border border-white";
    if (hours <= 8) return "bg-yellow-400 border border-white";
    return "bg-green-600 border border-white";
  };

  const today = new Date();
  const currentMonth = today.toLocaleString("default", { month: "long" });
  const currentYear = today.getFullYear();
  const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <main className="min-h-screen bg-gradient-to-t from-yellow-600 via-black to-black flex flex-col items-center justify-center p-6 text-white">
      <TopMenuButton /> 
      <h1 className="text-4xl mb-5">
        Your <span className="text-yellow-700">Sleep Insights</span> This Month
        <span className="text-yellow-700 font-extrabold">.</span>
      </h1>
      <h2 className="text-lg mb-3">
        {currentMonth} {currentYear}
      </h2>

      {loading ? (
        <p>⏳ Loading...</p>
      ) : (
        <div className="backdrop-blur-lg bg-black p-5 rounded-2xl shadow-4xl border w-full max-w-2xl">
          {/* Weekday Header Row */}
          <div className="grid grid-cols-7 gap-2 mr-3 mb-2">
            {weekdays.map((day) => (
              <div key={day} className="text-center font-semibold text-gray-300">
                {day}
              </div>
            ))}
          </div>

          {/* Days Grid */}
<div className="grid grid-cols-7 gap-1 sm:gap-2">
  {[...Array(daysInMonth)].map((_, i) => {
    const day = i + 1;
    const dateKey = new Date(today.getFullYear(), today.getMonth(), day)
      .toISOString()
      .split("T")[0];
    const hours = logs[dateKey] ?? null;

    return (
      <div
        key={day}
        className={`aspect-square flex flex-col justify-center items-center rounded-lg text-center ${getColor(
          hours
        )}`}
      >
        <span className="font-bold text-sm sm:text-base">{day}</span>
        <span className="text-[10px] sm:text-xs">{hours ? `${hours}h` : "-"}</span>
      </div>
    );
  })}
</div>

        </div>
      )}

      <button
        onClick={() => router.push("/dashboard")}
        className="mt-6 px-3 py-1 text-sm bg-black rounded-lg hover:bg-red-500 transition"
      >
        ⬅ Go Back
      </button>
    </main>
  );
}