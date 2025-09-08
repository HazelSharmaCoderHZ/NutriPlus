"use client";

import Protected from "@/components/Protected";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const { user, signOutUser } = useAuth();
  const router = useRouter();

  return (
    <Protected>
      <main className="bg-gradient-to-r from-indigo-700 via-black to-indigo-700 px-6 py-12">
        <h1 className="text-4xl text-white font-bold">
          Get healthier with NutriPlus🍃
        </h1>
        <p className="mt-2 mb-6 text-white">
          Welcome, {user?.email ?? user?.displayName} 👋
        </p>
        <br />

        {/* Main Features */}
        <h2 className="text-2xl font-semibold text-center text-green-600 mt-8 mb-4">
          Main Features
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <a
            href="/ai-chatbot"
            className="p-4 bg-white/10 rounded-2xl hover:scale-110 border border-white border-gray-700 hover:bg-green-600 hover:text-white transition flex flex-col items-center justify-center"
          >
            <img src="/ai.png" className="w-full h-full object-contain" />
            <div className="w-12 h-[1px] bg-white my-2"></div>
            <span className="font-semibold text-white text-center">
              AI Chatbot
            </span>
          </a>

          <a
            href="/calorie-count"
            className="p-4 bg-white/10 rounded-2xl border border-white hover:scale-110 border-gray-700 hover:bg-green-600 hover:text-white transition flex flex-col items-center justify-center"
          >
            <img
              src="/calorie.png"
              className=" w-full h-full object-contain"
            />
            <div className="w-12 h-[1px] bg-white my-2"></div>
            <span className="font-semibold text-white text-center">
              Calorie Count
            </span>
          </a>

          <a
            href="/nutrition-calendar"
            className="p-4 bg-white/10 rounded-2xl border border-white hover:scale-110 border-gray-700 hover:bg-green-600 hover:text-white transition flex flex-col items-center justify-center"
          >
            <img
              src="/cal.png"
              className="w-full h-full object-contain"
            />
            <div className="w-12 h-[1px] bg-white my-2"></div>
            <span className="font-semibold text-white text-center">
              Nutrition Calendar
            </span>
          </a>

          <a
            href="/recipes"
            className="p-4 bg-white/10 rounded-2xl border border-white hover:scale-110 border-gray-700 hover:bg-green-600 hover:text-white transition flex flex-col items-center justify-center"
          >
            <img
              src="/rec.png"
              className="w-full h-full object-contain"
            />
            <div className="w-12 h-[1px] bg-white my-2"></div>
            <span className="font-semibold text-white text-center">
              Recipes
            </span>
          </a>
        </div>

        {/* Additional Features */}
        <h2 className="text-2xl text-center font-semibold text-yellow-400 mt-12 mb-4">
          <br></br>Try These Out
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <a
            href="/water-check"
            className="p-4 bg-white/10 rounded-xl border border-white hover:scale-110 border-gray-700 hover:bg-yellow-500 hover:text-white transition flex flex-col items-center justify-center"
          >
            <img
              src="/water.png"
              className="w-full h-full object-contain"
            />
            <div className="w-10 h-[1px] bg-white my-2"></div>
            <span className="font-medium text-white text-center">
              Water Check
            </span>
          </a>

          <a
            href="/bmi"
            className="p-4 bg-white/10 rounded-xl border border-white hover:scale-110 border-gray-700 hover:bg-yellow-500 hover:text-white transition flex flex-col items-center justify-center"
          >
            <img src="/bmi.png" className="w-full h-full object-contain" />
            <div className="w-10 h-[1px] bg-white my-2"></div>
            <span className="font-medium text-white text-center">
              BMI Calculator
            </span>
          </a>

          <a
            href="/exercises"
            className="p-4 bg-white/10 rounded-xl border border-white hover:scale-110 border-gray-700 hover:bg-yellow-500 hover:text-white transition flex flex-col items-center justify-center"
          >
            <img
              src="/yoga.png"
              className="w-full h-full object-contain"
            />
            <div className="w-10 h-[1px] bg-white my-2"></div>
            <span className="font-medium text-white text-center">
              Exercises
            </span>
          </a>

          <a
            href="/sleep-tracker"
            className="p-4 bg-white/10 rounded-xl border border-white hover:scale-110 border-gray-700 hover:bg-yellow-500 hover:text-white transition flex flex-col items-center justify-center"
          >
            <img
              src="/sleep.png"
              className="w-full h-full object-contain"
            />
            <div className="w-10 h-[1px] bg-white my-2"></div>
            <span className="font-medium text-white text-center">
              Sleep Tracker
            </span>
          </a>


          <a
            href="/health-tips"
            className="p-4 bg-white/10 rounded-xl border border-white hover:scale-110 border-gray-700 hover:bg-yellow-500 hover:text-white transition flex flex-col items-center justify-center"
          >
            <img
              src="/cat.png"
              className="w-full h-full object-contain"
            />
            <div className="w-10 h-[1px] bg-white my-2"></div>
            <span className="font-medium text-white text-center">
              Health based on your category
            </span>
          </a>
        </div>

        {/* Sign Out */}
        <div className="flex justify-end mr-12 mt-12">
  <button
  onClick={async () => {
    try {
      await signOutUser();   
      router.push("/");     
    } catch (err) {
      console.error("Sign out failed:", err);
    }
  }}
  className="rounded-2xl border border-green px-5 py-2 hover:bg-red-500 text-white bg-white/10 hover:text-white transition"
>
  Sign out
</button>

</div>
      </main>
    </Protected>
  );
}
