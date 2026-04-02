import { existsSync, rmSync } from "node:fs";
import { join } from "node:path";
import { execFileSync } from "node:child_process";

/**
 * Wipe `.next` before `next dev` so the server never requires missing webpack chunks
 * (e.g. Cannot find module './520.js' after edits or interrupted compiles).
 *
 * Runs on every `npm run dev`. Skip with: SKIP_DEV_PREP=1 npm run dev
 * Faster restarts without wipe: npm run dev:fast
 * Nuclear reset: npm run dev:clean (also clears node_modules/.cache)
 * Default `npm run dev` uses webpack + host 0.0.0.0. Optional: npm run dev:turbo
 */
if (process.env.SKIP_DEV_PREP === "1") {
  process.exit(0);
}

const nextDir = join(process.cwd(), ".next");

const removeNextDir = () => {
  if (process.platform === "win32") {
    rmSync(nextDir, { recursive: true, force: true });
    return;
  }
  // Node's rmSync can throw ENOTEMPTY under concurrent FS activity; `rm -rf` is reliable on Unix.
  try {
    execFileSync("rm", ["-rf", nextDir], { stdio: "ignore" });
  } catch {
    rmSync(nextDir, { recursive: true, force: true });
  }
};

if (existsSync(nextDir)) {
  removeNextDir();
  console.log(
    "✓ Cleared .next — clean dev build (avoids stale Next.js preview / chunk errors).",
  );
}
