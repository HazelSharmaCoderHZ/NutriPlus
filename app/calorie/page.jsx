"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function KnowYourFood() {
  const [food, setFood] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const router = useRouter();

  const fetchNutrition = async () => {
    if (!food) return;
    setError("");
    setResult(null);

    try {
      const res = await fetch(
        `https://api.calorieninjas.com/v1/nutrition?query=${food}`,
        {
          headers: {
            "X-Api-Key": process.env.NEXT_PUBLIC_CALORIE_API_KEY, // stored in .env.local
          },
        }
      );

      if (!res.ok) throw new Error("API request failed");
      const data = await res.json();

      if (data.items && data.items.length > 0) {
        setResult(data.items[0]); // first match
      } else {
        setError("Food not found 😔");
      }
    } catch (err) {
      setError("Something went wrong. Try again.");
    }
  };

  return (
    <main className="min-h-screen flex flex-col md:flex-row items-center justify-center p-6">
      {/* Left Animation - Hidden on small screens */}
      <div className="hidden md:flex w-1/2 justify-center">
        <div className="frame">
          <div className="scene1">
            <div className="boy">
              <div className="boy__head">
                <div className="boy__hair"></div>
                <div className="boy__eyes"></div>
                <div className="boy__mouth"></div>
                <div className="boy__cheeks"></div>
              </div>
              <div className="noodle"></div>
              <div className="boy__leftArm">
                <div className="chopsticks"></div>
              </div>
            </div>
            <div className="plate"></div>
            <div className="rightArm"></div>
          </div>
        </div>
      </div>

      {/* Right Side - Nutrition Info */}
      <div className="w-full md:w-1/2 flex flex-col items-center">
        <h1 className="text-5xl text-white font-bold mb-6">🥗 Know Your Food</h1>

        <input
          type="text"
          value={food}
          onChange={(e) => setFood(e.target.value)}
          placeholder="Enter food item (e.g. rice, apple)"
          className="px-4 py-2 bg-gradient-to-r from-blue-200 to-cyan-100 rounded-lg text-black w-80 mb-4"
        />

        <button
          onClick={fetchNutrition}
          className="px-6 py-2 bg-green-200 rounded-lg hover:bg-white/30 transition"
        >
          Check Nutrition
        </button>

        {result && (
          <div className="mt-6 border bg-gradient-to-r from-indigo-400 via-purple-400 to-yellow-200 p-4 rounded-lg hover:scale-105 text-left w-80">
            <h2 className="text-xl font-semibold capitalize">{result.name}</h2>
            <p>Calories: <span className="text-yellow-300">{result.calories}</span></p>
            <p>Protein: {result.protein_g} g</p>
            <p>Carbs: {result.carbohydrates_total_g} g</p>
            <p>Fat: {result.fat_total_g} g</p>
            <p>Sugar: {result.sugar_g} g</p>
            <p>Fiber: {result.fiber_g} g</p>
            <p>Cholesterol: {result.cholesterol_mg} mg</p>
            <p>Sodium: {result.sodium_mg} mg</p>
            <p>Potassium: {result.potassium_mg} mg</p>
          </div>
        )}

        {error && <p className="mt-4 text-red-300">{error}</p>}

        <button
          onClick={() => router.push("/dashboard")}
          className="mb-6 mt-6 px-2 py-1 bg-red-600 rounded-lg border hover:bg-red-500 transition"
        >
          ⬅ Go Back
        </button>
      </div>
    </main>
  );
}
