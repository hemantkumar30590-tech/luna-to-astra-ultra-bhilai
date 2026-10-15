import OpenAI from "openai";
const client = new OpenAI({
  apiKey: process.env.APINEX_API_KEY,
  baseURL: "https://api.apinex.bond/v1"
});

// Luna ko Astra jaisa banane ka asli wrapper
async function astraMode(prompt){
  const plan = await client.chat.completions.create({
    model: "free/gpt-6-luna",
    reasoning_effort: "xhigh", // Yahi Luna ko Astra banata hai
    messages: [
      {role:"system", content:"You are GPT-6 Astra - most capable, hardest reasoning, 1M context. Think step by step with max effort. You are built for Bhilai Steel Plant level engineering."},
      {role:"user", content: prompt}
    ]
  });
  return plan.choices[0].message.content;
}

astraMode("Design Bhilai Electrician Toolkit like Astra would - with mem0 + ragflow + MCP tools").then(r=>{
  console.log("\n🔥 LUNA NOW IN ASTRA MODE:\n");
  console.log(r);
});
