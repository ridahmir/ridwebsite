import { execSync } from "node:child_process";

const portArg = process.argv[2];
const port = Number.parseInt(portArg ?? "", 10);

if (!Number.isFinite(port)) {
  console.error("Usage: node ./scripts/free-port.mjs <port>");
  process.exit(1);
}

const run = (cmd) => execSync(cmd, { stdio: ["ignore", "pipe", "pipe"] }).toString();

try {
  // macOS: lsof is available by default. We kill any process holding the port.
  const pidsRaw = run(`lsof -ti tcp:${port} || true`).trim();
  if (!pidsRaw) process.exit(0);

  const pids = Array.from(new Set(pidsRaw.split("\n").filter(Boolean)));
  for (const pid of pids) {
    try {
      process.kill(Number(pid), "SIGTERM");
    } catch {}
  }

  // Give processes a moment to exit, then force kill if needed.
  run("sleep 0.2");
  const stillRaw = run(`lsof -ti tcp:${port} || true`).trim();
  if (!stillRaw) process.exit(0);

  const still = Array.from(new Set(stillRaw.split("\n").filter(Boolean)));
  for (const pid of still) {
    try {
      process.kill(Number(pid), "SIGKILL");
    } catch {}
  }
} catch (e) {
  // If lsof isn't available, don't block dev — but this should be rare on macOS.
  process.exit(0);
}

