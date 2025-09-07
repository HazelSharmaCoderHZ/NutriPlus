"use client";

import Protected from "@/components/Protected";
import { useAuth } from "@/context/AuthContext";

export default function DashboardPage() {
  const { user, signOutUser } = useAuth();

  return (
    <Protected>
      <main className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-4xl text-white font-bold">
          Get healthier with NutriPlus🍃
        </h1>
        <p className="mt-2 mb-6 text-white">
          Welcome, {user?.email ?? user?.displayName} 👋
        </p>

        {/* Main Features */}
        <h2 className="text-2xl font-semibold text-green-600 mt-8 mb-4">
          Main Features
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <a
            href="/ai-chatbot"
            className="p-4 bg-white/10 rounded-2xl hover:scale-110 border-xl border-white border border-gray-700 hover:bg-green-600 hover:text-white transition flex flex-col items-center justify-center"
          >
            <img src="/images/AI.png" className="w-16 h-16 mb-2 object-contain" />
            <span className="font-semibold text-white text-center">AI Chatbot</span>
          </a>

          <a
            href="/calorie-count"
            className="p-4 bg-white/10 rounded-2xl border border-xl border-white hover:scale-110 border-gray-700 hover:bg-green-600 hover:text-white transition flex flex-col items-center justify-center"
          >
            <img
              src="/images/calorie-count.png"
              className="w-16 h-16 mb-2 object-contain"
            />
            <span className="font-semibold text-white text-center">Calorie Count</span>
          </a>

          <a
            href="/nutrition-calendar"
            className="p-4 bg-white/10 rounded-2xl border border-xl border-white  hover:scale-110 border-gray-700 hover:bg-green-600 hover:text-white transition flex flex-col items-center justify-center"
          >
            <img
              src="/images/nutrition-calendar.png"
              className="w-16 h-16 mb-2 object-contain"
            />
            <span className="font-semibold text-white text-center">Nutrition Calendar</span>
          </a>

          <a
            href="/recipes"
            className="p-4 bg-white/10 rounded-2xl border border-xl border-white hover:scale-110 border-gray-700 hover:bg-green-600 hover:text-white transition flex flex-col items-center justify-center"
          >
            <img src="/images/recipes.png" className="w-16 h-16 mb-2 object-contain" />
            <span className="font-semibold text-white text-center">Recipes</span>
          </a>
        </div>

        {/* Additional Features */}
        <h2 className="text-2xl font-semibold text-yellow-400 mt-12 mb-4">
          Try These Out
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <a
            href="/water-check"
            className="p-4 bg-white/10 rounded-xl border-xl border-white hover:scale-110 border border-gray-700 hover:bg-yellow-500 hover:text-white transition flex flex-col items-center justify-center"
          >
            <img src="/images/water-check.png" className="w-12 h-12 mb-2 object-contain" />
            <span className="font-medium text-white text-center">Water Check</span>
          </a>

          <a
            href="/bmi"
            className="p-4 bg-white/10 rounded-xl border-xl border-white border hover:scale-110 border-gray-700 hover:bg-yellow-500 hover:text-white transition flex flex-col items-center justify-center"
          >
            <img src="/images/bmi.png" className="w-12 h-12 mb-2 object-contain" />
            <span className="font-medium text-white text-center">BMI Calculator</span>
          </a>

          <a
            href="/exercises"
            className="p-4 bg-white/10 rounded-xl border border-xl border-white border-gray-700 hover:bg-yellow-500 hover:text-white hover:scale-110 transition flex flex-col items-center justify-center"
          >
            <img src="/images/exercises.png" className="w-12 h-12 mb-2 object-contain" />
            <span className="font-medium text-white text-center">Exercises</span>
          </a>

          <a
            href="/sleep-tracker"
            className="p-4 bg-white/10 rounded-xl border border-xl border-white hover:scale-110 border-gray-700 hover:bg-yellow-500 hover:text-white transition flex flex-col items-center justify-center"
          >
            <img src="/images/sleep-tracker.png" className="w-12 h-12 mb-2 object-contain" />
            <span className="font-medium text-white text-center">Sleep Tracker</span>
          </a>

          <a
            href="/mood-tracker"
            className="p-4 bg-white/10 rounded-xl border border-xl border-white hover:scale-110 border-gray-700 hover:bg-yellow-500 hover:text-white transition flex flex-col items-center justify-center"
          >
            <img src="/images/mood-tracker.png" className="w-12 h-12 mb-2 object-contain" />
            <span className="font-medium text-white text-center">Mood Tracker</span>
          </a>

          <a
            href="/health-tips"
            className="p-4 bg-white/10 rounded-xl border hover:scale-110 border-xl border-white border-gray-700 hover:bg-yellow-500 hover:text-white transition flex flex-col items-center justify-center"
          >
            <img src="/images/health-tips.png" className="w-12 h-12 mb-2 object-contain" />
            <span className="font-medium text-white text-center">Health Tips</span>
          </a>
        </div>

        {/* Sign Out */}
        <button
          onClick={signOutUser}
          className="mt-12 rounded-2xl border border-green px-5 py-2 hover:bg-red-600 justify-left items-center text-white bg-green/30 hover:text-white transition"
        >
          Sign out
        </button>
      </main>
    </Protected>
  );
}
