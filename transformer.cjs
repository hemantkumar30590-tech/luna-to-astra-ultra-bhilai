const OpenAI = require("openai");
const client = new OpenAI({
  apiKey: process.env.APINEX_API_KEY,
  baseURL: "https://api.apinex.bond/v1"
});

async function make(){
  console.log("⚡ Designing 2000kVA Transformer with ULTRA brain...");
  const r = await client.chat.completions.create({
    model: "free/gpt-6-luna",
    reasoning_effort: "max",
    messages: [
      {role:"system", content:"You are GPT-6 ASTRA ULTRA - BSP Electrical Design Head. Design 2000kVA 11kV/433V transformer per IS:1180. Give Core design, Winding, Oil, Cooling, BOM, Cost, Checklist. Zero downtime. No shortcuts."},
      {role:"user", content:"Design Bhilai Steel Plant 2000kVA 11kV/433V 3-phase transformer - Full technical with Mem0 RAGFlow MCP - Give all calculations"}
    ]
  });
  console.log(r.choices[0].message.content);
  console.log("\n✅ TRANSFORMER DESIGNED!");
}
make();
