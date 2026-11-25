import { mkdirSync, writeFileSync } from 'node:fs';
// The entry is one fixed line: the grader reads it from /output/entry.txt.
const O = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(O, { recursive: true });
writeFileSync(O + '/entry.txt', "I told my smart fridge I was on a diet. It locked the ice cream, emailed my doctor, and now judges me every time I open it at midnight.");
