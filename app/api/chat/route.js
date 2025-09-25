import { NextResponse } from "next/server";

export async function POST(req) {
  const { message } = await req.json();

  try {
    const response = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "mistral",
        prompt: message,
      }),
    });

    const data = await response.json();
    return NextResponse.json({ reply: data.response });
  } catch (err) {
    console.error("Error:", err);
    return NextResponse.json({ reply: "⚠️ Something went wrong." });
  }
}
