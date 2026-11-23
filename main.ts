// One Emoji, One Smile — entry program.
// Writes exactly one emoji, the warmest smile for a stranger, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const EMOJI = "😄";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EMOJI, "utf8");
