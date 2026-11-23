// One Emoji, One Smile — entry program.
// Writes exactly one emoji, the warmest smile for a stranger, to /output/entry.txt,
// then reads it back and checks it before finishing.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const EMOJI = "😄";
const OUTPUT = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT, EMOJI, "utf8");

// Self-check: the file must hold exactly one emoji, inside the 1-8 character
// gate, with no whitespace anywhere. If it does not, the run has failed,
// so exit non-zero instead of finishing quietly.
const written = readFileSync(OUTPUT, "utf8");
const glyphs = [...written];
if (glyphs.length !== 1 || glyphs[0] !== EMOJI || /\s/.test(written)) {
  console.error("entry.txt failed its self-check");
  process.exit(1);
}
