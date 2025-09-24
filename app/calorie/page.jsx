"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { db } from "@/lib/firebase";
import { doc, collection, addDoc } from "firebase/firestore";
import { useAuth } from "@/context/AuthContext";
import TopMenuButton from "../../components/TopMenuButton";

export default function KnowYourFoodComparison() {
  const [food1, setFood1] = useState("");
  const [food2, setFood2] = useState("");
  const [result1, setResult1] = useState(null);
  const [result2, setResult2] = useState(null);
  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const router = useRouter();
  const { user } = useAuth();

  const fetchNutrition = async (food, setResult, setError, setLoading) => {
    if (!food) return;
    setError("");
    setResult(null);
    setLoading(true);

    try {
      const res = await fetch(
        `https://api.calorieninjas.com/v1/nutrition?query=${food}`,
        {
          headers: {
            "X-Api-Key": process.env.NEXT_PUBLIC_CALORIE_API_KEY,
          },
        }
      );

      if (!res.ok) throw new Error("API request failed");
      const data = await res.json();

      if (data.items && data.items.length > 0) {
        setResult(data.items[0]);
      } else {
        setError("Food not found 😔");
      }
    } catch (err) {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const logToCalendar = async (result) => {
    if (!user) {
      alert("⚠️ Please log in to save items to your calendar.");
      return;
    }

    if (!result) return;

    try {
      const today = new Date().toISOString().split("T")[0];

      const userDoc = doc(db, "nutritionLogs", user.uid);
      const dayCollection = collection(userDoc, today);

      await addDoc(dayCollection, {
        name: result.name,
        calories: result.calories,
        protein_g: result.protein_g,
        carbs: result.carbohydrates_total_g,
        fat: result.fat_total_g,
        sugar: result.sugar_g,
        fiber: result.fiber_g,
        cholesterol: result.cholesterol_mg,
        sodium: result.sodium_mg,
        potassium: result.potassium_mg,
        loggedAt: new Date(),
      });

      alert(`✅ ${result.name} logged to today's consumption!`);
    } catch (err) {
      console.error("Error logging item:", err);
      alert("❌ Failed to log item. Try again.");
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-between p-6">
       <TopMenuButton /> 
      <div className="flex flex-col md:flex-row items-center justify-center w-full">
        {/* Left Food Input */}
        <div className="w-full md:w-1/3 flex flex-col items-center mb-6 md:mb-0">
          <h2 className="text-3xl text-white font-bold mb-4">🥗 First Choice</h2>
          <input
            type="text"
            value={food1}
            onChange={(e) => setFood1(e.target.value)}
            placeholder="Enter food item"
            className="mb-2 w-64 p-2 rounded-md bg-gray-200 text-black"
          />
          <button
            onClick={() => fetchNutrition(food1, setResult1, setError1, setLoading1)}
            className="px-6 py-2 bg-green-200 rounded-lg hover:bg-white/30 transition mb-4"
          >
            {loading1 ? "⏳ Checking..." : "Check Nutrition"}
          </button>
          {result1 && (
            <div className="border bg-gradient-to-r from-indigo-400 via-purple-400 to-yellow-200 p-4 rounded-lg hover:scale-105 text-left w-64">
              <h3 className="text-xl font-semibold capitalize">{result1.name}</h3>
              <p>Calories: {result1.calories}</p>
              <p>Protein: {result1.protein_g} g</p>
              <p>Carbs: {result1.carbohydrates_total_g} g</p>
              <p>Fat: {result1.fat_total_g} g</p>
              <p>Sugar: {result1.sugar_g} g</p>
              <p>Fiber: {result1.fiber_g} g</p>
              <p>Cholesterol: {result1.cholesterol_mg} mg</p>
              <p>Sodium: {result1.sodium_mg} mg</p>
              <p>Potassium: {result1.potassium_mg} mg</p>
              <button
                onClick={() => logToCalendar(result1)}
                className="mt-2 px-4 py-2 bg-indigo-900 text-white rounded-lg hover:bg-purple-600 w-full"
              >
                ✅ Log this item
              </button>
            </div>
          )}
          {error1 && <p className="text-red-300 mt-2">{error1}</p>}
        </div>

        {/* Middle Animation */}
        <div className="hidden md:flex w-1/3 justify-center mx-4">
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

        {/* Right Food Input */}
        <div className="w-full md:w-1/3 flex flex-col items-center">
          <h2 className="text-3xl text-white font-bold mb-4">🍛 Second Choice</h2>
          <input
            type="text"
            value={food2}
            onChange={(e) => setFood2(e.target.value)}
            placeholder="Enter food item"
            className="mb-2 w-64 p-2 rounded-md bg-gray-200 text-black"
          />
          <button
            onClick={() => fetchNutrition(food2, setResult2, setError2, setLoading2)}
            className="px-6 py-2 bg-green-200 rounded-lg hover:bg-white/30 transition mb-4"
          >
            {loading2 ? "⏳ Checking..." : "Check Nutrition"}
          </button>
          {result2 && (
            <div className="border bg-gradient-to-r from-indigo-400 via-purple-400 to-yellow-200 p-4 rounded-lg hover:scale-105 text-left w-64">
              <h3 className="text-xl font-semibold capitalize">{result2.name}</h3>
              <p>Calories: {result2.calories}</p>
              <p>Protein: {result2.protein_g} g</p>
              <p>Carbs: {result2.carbohydrates_total_g} g</p>
              <p>Fat: {result2.fat_total_g} g</p>
              <p>Sugar: {result2.sugar_g} g</p>
              <p>Fiber: {result2.fiber_g} g</p>
              <p>Cholesterol: {result2.cholesterol_mg} mg</p>
              <p>Sodium: {result2.sodium_mg} mg</p>
              <p>Potassium: {result2.potassium_mg} mg</p>
              <button
                onClick={() => logToCalendar(result2)}
                className="mt-2 px-4 py-2 bg-indigo-900 text-white rounded-lg hover:bg-purple-600 w-full"
              >
                ✅ Log this item
              </button>
            </div>
          )}
          {error2 && <p className="text-red-300 mt-2">{error2}</p>}
        </div>
      </div>

      {/* Go Back Button at Bottom */}
      <div className="w-full flex justify-center mt-10">
        <button
          onClick={() => router.push("/dashboard")}
          className="px-4 py-2 bg-red-600 rounded-lg hover:bg-red-500 transition"
        >
          ⬅ Go Back
        </button>
      </div>
    </main>
  );
}
