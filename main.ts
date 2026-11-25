// The Robot Vacuum's Best Excuse
// Entry program: writes one funny one-line excuse from a robot vacuum
// for missing a spot to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Node 22+, stdlib only, fully deterministic — the same text every run.
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ENTRY =
  "My cliff sensors flagged that crumb as a cliff. I'm not risking my life for one crumb.";

const repoDir = dirname(fileURLToPath(import.meta.url));
void repoDir;

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ??
  process.env.OUTPUT_DIR ??
  "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
