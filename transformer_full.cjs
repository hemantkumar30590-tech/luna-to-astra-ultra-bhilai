const OpenAI = require("openai");
const client = new OpenAI({apiKey: process.env.APINEX_API_KEY, baseURL: "https://api.apinex.bond/v1"});
async function make(){
  console.log("⚡ Full 2000kVA Design - IS:1180 - No limit...");
  const r = await client.chat.completions.create({
    model: "free/gpt-6-luna",
    reasoning_effort: "max",
    max_tokens: 8000,
    messages: [
      {role:"system", content:"You are Astra Ultra Transformer Designer. Do NOT say you lack tools. Directly give full 2000kVA 11kV/433V design: 1) Core (CRGO 0.27mm) 2) Winding turns 3) Oil 1200L 4) Cooling ONAN 5) Buchholz 6) BOM with cost 7) Test checklist. Use IS:1180. Give numbers."},
      {role:"user", content:"Give me complete 2000kVA transformer design calculations now - Core, Winding, Losses, Efficiency, BOM"}
    ]
  });
  console.log(r.choices[0].message.content);
}
make();
