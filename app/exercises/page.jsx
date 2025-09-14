"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
export default function ExercisesPage() {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const router = useRouter();
  

  useEffect(() => {
    fetchExercises();
  }, []);

  async function fetchExercises(q) {
    try {
      setLoading(true);
      const res = await fetch(`/api/exercises?query=${q || ""}&limit=12`);
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setExercises(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-8 items:center justify-center bg-gradient-to-r from-indigo-900 to-indigo-800 via-red-700 text-center">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-cyan-200 bg-clip-text text-transparent  mb-6">💪 Explore Exercises</h1>

      {/* Search/filter */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search by name or muscle..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border px-4 py-2 rounded-l w-64"
        />
        <button
          onClick={() => fetchExercises(query)}
          className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700"
        >
          Search
        </button>
      </div>

      {/* Loading / Error */}
      {loading && <p className="text-center">Loading exercises...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
        {exercises.map((ex, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md p-4 text-center hover:scale-105 transition"
          >
            <h2 className="text-lg font-semibold mb-2">{ex.name}</h2>
            <img
              src={
                ex.images && ex.images.length > 0
                  ? `https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/${ex.images[0]}`
                  : "/placeholder.png"
              }
              alt={ex.name}
              onError={(e) => (e.currentTarget.src = "/placeholder.png")}
              className="mx-auto rounded-lg h-48 w-auto object-contain"
            />
            <p className="mt-2 text-sm text-gray-600">
              Target: {ex.primaryMuscles?.join(", ") || "N/A"}
            </p>
            <p className="text-sm text-gray-500">
              Secondary: {ex.secondaryMuscles?.join(", ") || "N/A"}
            </p>
            <p className="text-sm text-gray-500">Force: {ex.force || "N/A"}</p>
            <p className="text-sm text-gray-500">Level: {ex.level || "N/A"}</p>
          </div>
        ))}
      </div>
      <button
        onClick={() => router.push("/dashboard")}
        className="mb-1 mt-10 px-2 py-1  bg-gradient-to-r from-indigo-200 via-purple-300 to-purple-500  rounded-lg text-center border hover:scale-105 transition"
      >
        ⬅ Go Back
      </button>
    </div>
  );
}

