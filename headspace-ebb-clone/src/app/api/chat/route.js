import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { message } = await req.json();

    if (!message || message.trim() === "") {
      return NextResponse.json({ reply: "I didn't receive any input." });
    }

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama3-8b-8192", // Groq supports llama3-8b-8192 and 70b-8192
        messages: [
          { role: "system", content: "You are a friendly healthcare assistant named Elivia." },
          { role: "user", content: message },
        ],
        temperature: 0.7,
        max_tokens: 150,
      }),
    });

    const data = await response.json();
    console.log("🔍 GROQ API RESPONSE:", JSON.stringify(data, null, 2));

    const reply = data.choices?.[0]?.message?.content?.trim() || "I'm not sure how to respond.";
    return NextResponse.json({ reply });

  } catch (error) {
    console.error("❌ Error talking to Groq:", error);
    return NextResponse.json({ reply: "Elivia had trouble thinking... please try again." });
  }
}
