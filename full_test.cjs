const OpenAI = require("openai");
const client = new OpenAI({apiKey: process.env.APINEX_API_KEY, baseURL: "https://api.apinex.bond/v1"});
async function test(effort){
  const r = await client.chat.completions.create({
    model: "free/gpt-6-luna",
    reasoning_effort: effort,
    messages: [
      {role:"system", content:"You are GPT-6 Astra - hardest reasoning, 1M context. Think like Bhilai Steel Plant expert."},
      {role:"user", content: "Bhilai Steel Plant me motor trip ka root cause analysis batao - full technical with Mem0 RAGFlow MCP"}
    ]
  });
  console.log(`\n====== Effort: ${effort.toUpperCase()} ======\n`, r.choices[0].message.content);
}
test("xhigh");
