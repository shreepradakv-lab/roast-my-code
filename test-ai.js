import dotenv from "dotenv";

dotenv.config();

async function testAI() {
  try {
    const apiKey = process.env.GEMINI_API_KEY;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: "Roast this code: int a = 10;" }]
            }
          ]
        }),
      }
    );

    const data = await response.json();

    if (data.candidates && data.candidates.length > 0) {
      console.log(data.candidates[0].content.parts[0].text);
    } else {
      console.log("Full response:", JSON.stringify(data, null, 2));
    }

  } catch (err) {
    console.error("ERROR:", err.message);
  }
}

testAI();