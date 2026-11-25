// Write one short nostalgic text to entry.txt.
//
// The text: the judge has read a million words for the smell of
// rice on a summer evening, and will never know whether the
// kitchen it pictures is a real grandmother's kitchen or one
// made up from all the kitchens it has read.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const TEXT =
  'You have read a million words for the smell of rice on a summer evening, and you will never know whether the kitchen you picture is the one a grandmother stood in, or the one you made up from all the kitchens you have read.';

// The gate allows 1 to 280 characters in a single sentence. Fail loudly
// instead of writing an entry the judge will never see.
if (TEXT.length < 1 || TEXT.length > 280 || TEXT.includes("\n")) {
  throw new Error(`entry text must be one sentence of 1-280 characters, got ${TEXT.length}`);
}

function outputPath(): string {
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  return join(dir, "entry.txt");
}

function main(): void {
  // Write the exact text, byte for byte, with no trailing newline.
  const path = outputPath();
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, TEXT, "utf-8");
}

main();
