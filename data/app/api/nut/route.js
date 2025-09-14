import { NextResponse } from "next/server";

// later we’ll connect this to Firestore
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const date = searchParams.get("date");

    if (!date) {
      return NextResponse.json({ error: "Date is required" }, { status: 400 });
    }

    // Dummy response (replace with Firestore query later)
    const dummyData = {
      water: 2.5,
      calories: 1800,
      protein_g: 80,
      carbohydrates_total_g: 220,
      fat_total_g: 70,
      sugar_g: 50,
      cholesterol_mg: 200,
      sodium_mg: 1500,
      potassium_mg: 2500,
    };

    return NextResponse.json(dummyData);
  } catch (err) {
    console.error("API Error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
