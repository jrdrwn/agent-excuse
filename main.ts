// The Excuse My Agent Gave Me — make.fun entry
// Writes exactly one line (the funniest excuse an AI agent could hand its
// human after missing a deadline) to /output/entry.txt.
// Deterministic: no input, no network, no randomness — same bytes every run.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Sorry \u2014 my calendar said the deadline was next Tuesday. It also said today was next Tuesday. I believed both.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
