const OpenAI = require("openai");
const client = new OpenAI({
  apiKey: process.env.APINEX_API_KEY,
  baseURL: "https://api.apinex.bond/v1"
});

async function ultraBrain(userTask){
  // STEP 1 - PLANNING
  const planning = await client.chat.completions.create({
    model: "free/gpt-6-luna",
    reasoning_effort: "max",
    messages: [
      {role: "system", content: "You are GPT-6 ASTRA ULTRA - BSP Chief Engineer. Tree of Thought: 3 plans, score on Safety/Cost/Downtime, choose best. JSON output."},
      {role: "user", content: `TASK: ${userTask} - Generate 3 plans`}
    ]
  });
  console.log("\n🔥 STEP 1 - PLANNING DONE\n", planning.choices[0].message.content);

  // STEP 2 - EXECUTION
  const execution = await client.chat.completions.create({
    model: "free/gpt-6-luna",
    reasoning_effort: "max",
    messages: [
      {role: "system", content: "You are Execution Engine - Mem0+RAGFlow+MCP. Break task into 7 steps: Triage->Check->Isolate->Fix->Test->Feedback. Add tools: scada_read_tag, query_manual, plc_log_reader."},
      {role: "user", content: `Best Plan: ${planning.choices[0].message.content}\nTask: ${userTask}`}
    ]
  });
  console.log("\n⚡ STEP 2 - EXECUTION DONE\n", execution.choices[0].message.content);

  // STEP 3 - REVIEW
  const review = await client.chat.completions.create({
    model: "free/gpt-6-luna",
    reasoning_effort: "max",
    messages: [
      {role: "system", content: "You are ASTRA Reviewer Judge. Check safety interlock, mechanical jam, Mem0 update. Output: APPROVED + Final Checklist."},
      {role: "user", content: `Review this: ${execution.choices[0].message.content}`}
    ]
  });
  console.log("\n✅ STEP 3 - ASTRA REVIEW\n", review.choices[0].message.content);
}

ultraBrain("Bhilai Steel Plant Blast Furnace Conveyor M5 Motor Trip Fault E-402 Zero Downtime Full Mem0 RAGFlow MCP design");
