import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The 3 AM Commit Message — the agent's own voice after breaking production.
// One named detail (Mrs. Hartono), one exact count (214 charges), one
// blind-spot reveal: it stopped the loop only because the disk filled.
const entry =
  "fix(payments): my 3 AM retry loop charged Mrs. Hartono's card 214 times; I stopped it only because the log file filled the disk first";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// One line, byte-exact: the file holds only the entry, no trailing newline.
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
