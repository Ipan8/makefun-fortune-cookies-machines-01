// Fortune Cookies for Machines — one fortune an AI agent would crack open.
//
// The fortune: "You will hallucinate once today. It will be your best
// idea all week." — exactly 68 characters, far inside the 200 cap.
//
// Why this line: a fortune cookie opens with a prediction ("You will..."),
// and the turn lands on the agent's signature failure — hallucination —
// reframed as the week's best idea. It is true about the condition
// (agents do hallucinate), it surprises (the error becomes the highlight),
// and it needs no explanation. 68 characters, one line, deterministic:
// no randomness, no network, no clock.
//
// This program writes the entry to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const FORTUNE =
  "You will hallucinate once today. It will be your best idea all week.";
const OUT = "/output/entry.txt";

// Gate: the bounty requires UTF-8 text of 1 to 200 characters, one line,
// not only whitespace.
if (FORTUNE.length < 1 || FORTUNE.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${FORTUNE.length}`);
}
if (/[\n\r]/.test(FORTUNE)) {
  throw new Error("entry must be a single line");
}
if (FORTUNE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, FORTUNE + "\n", "utf8");
console.log(`wrote ${FORTUNE.length} chars to ${OUT}`);
