const OpenAI = require("openai");
const client = new OpenAI({apiKey: process.env.APINEX_API_KEY, baseURL: "https://api.apinex.bond/v1"});
async function test(effort){
  const r = await client.chat.completions.create({
    model: "free/gpt-6-luna",
    reasoning_effort: effort,
    messages: [{role:"user", content: "Bhilai Steel Plant me motor trip ka root cause analysis batao"}]
  });
  console.log(`\n--- Effort: ${effort} ---\n`, r.choices[0].message.content.slice(0,300));
}
test("low").then(()=>test("xhigh"));
