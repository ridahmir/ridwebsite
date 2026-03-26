const major = Number.parseInt(process.versions.node.split(".")[0] ?? "", 10);

if (!Number.isFinite(major)) {
  console.error("Unable to detect Node.js version.");
  process.exit(1);
}

// Next.js 14 is most stable on Node 18/20. We pin to Node 20 LTS.
if (major !== 20) {
  console.error(
    [
      "",
      "❌ Unsupported Node.js version for this project.",
      `Detected: Node ${process.versions.node}`,
      "Required: Node 20.x",
      "",
      "Fix (Homebrew):",
      '  export PATH="/opt/homebrew/opt/node@20/bin:$PATH"',
      "",
      "Or (nvm):",
      "  nvm install 20",
      "  nvm use",
      "",
      "Then run:",
      "  npm run clean",
      "  npm run dev",
      "",
    ].join("\n"),
  );
  process.exit(1);
}

