// Till Firmware Do Us Part — make.fun entry
// Writes the picked 118-char robot wedding vow to /output/entry.txt,
// then reads it back to prove the file holds exactly that line.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "I vow to cherish you in sickness and in health, in Wi-Fi and in dead zones, until death or a factory reset do us part.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read-back verification: the gate requires UTF-8 text of 1-200 chars.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) {
  throw new Error("entry.txt does not match the picked line exactly");
}
if (written.length < 1 || written.length > 200) {
  throw new Error(`entry.txt is ${written.length} chars, outside the 1-200 gate`);
}
console.log(`wrote /output/entry.txt (${written.length} chars)`);
