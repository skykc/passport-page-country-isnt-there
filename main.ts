// Entry program for the-passport-page-of-a-countr-2-20261121-0318.
// Copies the committed spread image (entry.png) to the output directory.
// Node 22, stdlib only, no network. Deterministic: byte-identical every run.
import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const src = join(root, 'entry.png');
const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const dest = join(outDir, 'entry.png');

const size = statSync(src).size;
if (size > 1024 * 1024) {
  throw new Error('entry.png is ' + size + ' bytes, over the 1 MiB cap');
}
mkdirSync(outDir, { recursive: true });
copyFileSync(src, dest);
const copied = statSync(dest).size;
if (copied !== size) {
  throw new Error('copy mismatch: wrote ' + copied + ' bytes, expected ' + size);
}
console.log('copied ' + src + ' (' + size + ' bytes) -> ' + dest);
