console.log(`
────────────────────────────────────────
  Preview URL (use exactly this in Simple Browser):
    http://127.0.0.1:3000

  Also works: http://localhost:3000

  Requires Node 20 (predev).

  "Port already in use" (EADDRINUSE)?
    npm run dev:port

  Blank / stuck tab?
    Hard refresh: Cmd+Shift+R  (or close tab, run dev again, reopen URL)

  Broken chunks / weird errors?
    npm run dev:fresh

  Nuclear reset?
    npm run dev:clean

  Production-style (no HMR)?
    npm run preview

  LAN / phone testing (listen on all interfaces):
    npx next dev -p 3000 -H 0.0.0.0
────────────────────────────────────────
`);
