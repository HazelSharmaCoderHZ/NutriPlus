"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function RecipesPage() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const fetchRecipes = async () => {
    if (!query) return;
    setError("");
    setRecipes([]);
    setLoading(true);

    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      if (!res.ok) throw new Error("Failed to fetch recipes");

      const data = await res.json();
      if (!data.meals) {
        setError("❌ No recipes found. Try another dish.");
        setRecipes([]);
      } else {
        setRecipes(data.meals);
      }
    } catch (err) {
      setError("⚠️ Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  // Extract ingredients + measures dynamically (TheMealDB has 20 slots)
  const getIngredients = (meal) => {
    let ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim() !== "") {
        ingredients.push(`${ingredient} - ${measure || ""}`);
      }
    }
    return ingredients;
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-700 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-[28rem] h-[28rem] bg-indigo-700 rounded-full blur-3xl opacity-30 animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full md:w-3/4 lg:w-1/2 bg-white/10 backdrop-blur-xl p-10 rounded-2xl shadow-2xl border"
      >
        <h1 className="text-4xl font-extrabold mb-6 text-center bg-gradient-to-r from-yellow-300 to-pink-400 bg-clip-text text-transparent">
          🍲 Explore Recipes
        </h1>

        {/* Search Bar */}
        <div className="flex w-full gap-2 mb-6">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter a dish name (e.g., pasta, biryani)"
            className="px-4 py-3 w-full rounded-lg text-black shadow-inner focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={fetchRecipes}
            className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg font-semibold shadow-lg"
          >
            Search
          </motion.button>
        </div>

        {/* Error message */}
        {error && <p className="text-red-300 mb-4">{error}</p>}

        {/* Loading */}
        {loading && (
          <p className="text-yellow-200 mb-4 animate-pulse">
            ⏳ Searching recipes...
          </p>
        )}

        {/* Results */}
        <div className="space-y-6">
          {recipes.map((meal) => (
            <motion.div
              key={meal.idMeal}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="p-4 bg-white/20 rounded-xl shadow-md"
            >
              <h2 className="text-2xl font-bold mb-2">{meal.strMeal}</h2>
              {meal.strMealThumb && (
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-full rounded-lg mb-3"
                />
              )}
              <p className="text-sm mb-1">
                <strong>Category:</strong> {meal.strCategory || "N/A"}
              </p>
              <p className="text-sm mb-3">
                <strong>Cuisine:</strong> {meal.strArea || "N/A"}
              </p>

              {/* Ingredients list */}
              <div className="mb-3">
                <h3 className="font-semibold mb-1">🛒 Ingredients:</h3>
                <ul className="list-disc list-inside text-sm space-y-1">
                  {getIngredients(meal).map((ing, idx) => (
                    <li key={idx}>{ing}</li>
                  ))}
                </ul>
              </div>

              {/* Recipe instructions link */}
              <a
                href={meal.strSource || meal.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-300 underline hover:text-yellow-100 mt-3 inline-block"
              >
                📖 View Full Instructions
              </a>
            </motion.div>
          ))}
        </div>

        {/* Back Button */}
        <button
          onClick={() => router.push("/dashboard")}
          className="mt-10 px-4 py-2 bg-red-600 rounded-lg border hover:bg-red-500 transition"
        >
          ⬅ Go Back
        </button>
      </motion.div>
    </main>
  );
}
