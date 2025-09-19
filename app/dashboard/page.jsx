"use client";

import Protected from "@/components/Protected";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function DashboardPage() {
  const { user } = useAuth();
  const router = useRouter();

  // Refs for scrolling
  const tryRef = useRef(null);

  // Active card index for Try These Out
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-highlight loop
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 6); // 6 = number of cards
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Scroll function
  const scroll = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = 300; // pixels per click
      ref.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <Protected>
      <main className="bg-gradient-to-r from-indigo-900 via-black to-blue-900 px-6 mx-auto py-12 min-h-screen">
        <h1 className="text-4xl text-white font-bold text-center">
          Get healthier with NutriPlus🍃
        </h1>
        <p className="mt-2 mb-6 text-white text-center">
          Welcome, {user?.email ?? user?.displayName} 👋
        </p>

        {/* White container wrapper */}
        
          <h2 className="text-2xl font-semibold text-center text-green-600 mb-6">
            Main Features
          </h2>
          <div className="flex justify-center gap-8">
            <a
              href="/calorie"
              className="w-46 p-6 hover:scale-105  bg-[conic-gradient(from_180deg_at_50%_50%,rgba(164,51,255,0.7)_0%,rgba(0,255,209,0.7)_50%,rgba(164,51,255,0.7)_100%)] animate-spin-slow rounded-2xl border border-gray-700 hover:bg-green-800 hover:text-white transition flex flex-col items-center justify-center"
            >
              <img src="/calorie.png" className="w-32 h-38 object-contain" />
              <div className="w-12 h-[1px] bg-white my-2"></div>
              <span className="font-semibold text-white text-center">
                Know your food
              </span>
            </a>

            <a
              href="/nut"
              className="w-46 p-6 hover:scale-105 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(164,51,255,0.7)_0%,rgba(0,255,209,0.7)_50%,rgba(164,51,255,0.7)_100%)] animate-spin-slow rounded-2xl border border-gray-700 hover:bg-green-800 hover:text-white transition flex flex-col items-center justify-center"
            >
              <img src="/cal.png" className="w-32 h-38 object-contain" />
              <div className="w-12 h-[1px] bg-white my-2"></div>
              <span className="font-semibold text-white text-center">
                Nutrition Calendar
              </span>
            </a>

            <a
              href="/recipes"
              className="w-46 p-6 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(164,51,255,0.7)_0%,rgba(0,255,209,0.7)_50%,rgba(164,51,255,0.7)_100%)] animate-spin-slow rounded-2xl border border-gray-700 hover:bg-green-800 hover:scale-105 hover:text-white transition flex flex-col items-center justify-center"
            >
              <img src="/rec.png" className="w-32 h-38 object-contain" />
              <div className="w-12 h-[1px] bg-white my-2"></div>
              <span className="font-semibold text-white text-center">
                Recipes
              </span>
            </a>
          </div>

          {/* Try These Out */}
          <h2 className="text-2xl font-semibold text-center text-yellow-500 mt-12 mb-4">
            Try These Out
          </h2>
          <div className="relative">
            <button
              onClick={() => scroll(tryRef, "left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div
              ref={tryRef}
              className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth py-8 px-16 "
            >
              {[
                { href: "/water-check", img: "/water.png", label: "Water Check" },
                { href: "/bmi", img: "/bmi.png", label: "BMI Calculator" },
                { href: "/exercises", img: "/yoga.png", label: "Exercises" },
                { href: "/sleep", img: "/sleep.png", label: "Sleep Tracker" },
                { href: "/health-tips", img: "/cat.png", label: " Your Category" },
                { href: "/sleepcal", img: "/bmi.png", label: "Sleep Calendar" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className={`min-w-[120px] p-11 h-[180px] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(164,51,255,0.7)_0%,rgba(0,255,209,0.7)_50%,rgba(164,51,255,0.7)_100%)] animate-spin-slow rounded-xl border border-gray-700 hover:bg-yellow-500 hover:text-white transition-transform duration-500 flex flex-col items-center justify-center
                    ${activeIndex === i ? "scale-110 shadow-xl z-10" : "scale-100 opacity-80"}
                  `}
                >
                  <img src={item.img} className="w-30 h-30 object-contain" />
                  <div className="w-10 h-[1px] bg-white my-3"></div>
                  <span className="font-medium text-white text-center text-sm">
                    {item.label}
                  </span>
                </a>
              ))}
            </div>

            <button
              onClick={() => scroll(tryRef, "right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        

        {/* Sign Out */}
        <div className="flex justify-end mr-12 mt-12">
          <a
            href="/"
            onClick={async (e) => {
              e.preventDefault();
              await signOut(auth);
              window.location.href = "/auth/login";
            }}
            className="underline border bg-red-500 px-3 py-2 rounded-lg text-white hover:scale-105 hover:bg-red-600"
          >
            Sign out
          </a>
        </div>
      </main>
    </Protected>
  );
}
