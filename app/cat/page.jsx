"use client";

import { useAuth } from "@/context/AuthContext";

export default function CategoryPage() {
  const { user } = useAuth();

  return (
    <main className="min-h-screen bg-gradient-to-t from-black via-black to-black text-white p-6">
      <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-[#8a58ce] to-[#00CAFF] bg-clip-text text-transparent">
        Your Category
      </h1>
      <p className="text-center mt-2">Welcome back, {user?.displayName ?? "User"} 👋</p>

      {/* Health Profile */}
      <section className="mt-10 bg-white/10 p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Your Health Profile</h2>
        <ul className="space-y-2">
          <li>🎯 Goal: <span className="font-bold">Weight Loss</span></li>
          <li>🔥 Daily Calories: <span className="font-bold">1800 kcal</span></li>
          <li>💪 Protein Target: <span className="font-bold">120g</span></li>
          <li>💧 Water Goal: <span className="font-bold">2.5L</span></li>
        </ul>
      </section>

      {/* Recommendations */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Recommended for You</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-4 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-xl">
            🥗 Eat more leafy greens for fiber & micronutrients
          </div>
          <div className="p-4 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl">
            🏃‍♀️ Try 20-min light cardio 3x a week
          </div>
        </div>
      </section>

      {/* Links to Other Features */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Explore More</h2>
        <div className="flex flex-wrap gap-4">
          <a href="/recipes" className="bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700 transition">Healthy Recipes</a>
          <a href="/sleep" className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition">Sleep Tracker</a>
          <a href="/water-check" className="bg-cyan-600 px-4 py-2 rounded-lg hover:bg-cyan-700 transition">Water Check</a>
        </div>
      </section>
    </main>
  );
}
