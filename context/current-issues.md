When i hit http://localhost:3000 the url automatically changes to https://fancy-anchovy-2045.accounts.dev/sign-in?redirect_url=http%3A%2F%2Flocalhost%3A3000%2F 
this are the terminal logs 
PS C:\Users\chaitanya\OneDrive\Desktop\ghost-ai> npm run dev

> ghost-ai@0.1.0 dev
> next dev

▲ Next.js 16.3.5 (Turbopack)
- Local:         http://localhost:3000
- Network:       http://192.168.1.7:3000
- Environments: .env
✓ Ready in 562ms
✓ Running next.config.ts took 42ms

Clerk - DEPRECATION WARNING: "createRouteMatcher" is deprecated and will be removed in the next major release.
Use resource-based auth checks instead. Move auth checks into each page, layout, API route, or Server Function that accesses protected data. Middleware-based auth checks rely on path matching, which can diverge from how Next.js routes requests and leave protected resources reachable. For a migration guide, see: https://clerk.com/docs/guides/development/upgrading/upgrade-guides/migrate-from-create-route-matcher
Attention: Clerk collects telemetry data from its SDKs when connected to development instances.
The data collected is used to inform Clerk's product roadmap.
To learn more, including how to opt-out from the telemetry program, visit: https://clerk.com/docs/telemetry.

 GET / 307 in 327ms (next.js: 127ms, proxy.ts: 24ms, application-code: 177ms)
 GET /editor 200 in 107ms (next.js: 31ms, proxy.ts: 24ms, application-code: 52ms)
[browser] Clerk: Clerk has been loaded with development keys. Development instances have strict usage limits and should not be used when deploying your application to production. Learn more: https://clerk.com/docs/deployments/overview (https://fancy-anchovy-2045.clerk.accounts.dev/npm/@clerk/clerk-js@6/dist/clerk.browser.js:12:7821)
 POST /editor 200 in 50ms (next.js: 4ms, proxy.ts: 12ms, application-code: 34ms)
  └─ ƒ invalidateCacheAction() in 11ms node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js
[browser] Failed to fetch RSC payload for http://localhost:3000/. Falling back to browser navigation. TypeError: Failed to fetch
 GET / 307 in 64ms (next.js: 5ms, proxy.ts: 23ms, application-code: 36ms)
 GET /editor 200 in 57ms (next.js: 4ms, proxy.ts: 7ms, application-code: 46ms)
[browser] Clerk: Clerk has been loaded with development keys. Development instances have strict usage limits and should not be used when deploying your application to production. Learn more: https://clerk.com/docs/deployments/overview (https://fancy-anchovy-2045.clerk.accounts.dev/npm/@clerk/clerk-js@6/dist/clerk.browser.js:12:7821)
 POST /editor 200 in 45ms (next.js: 3ms, proxy.ts: 8ms, application-code: 34ms)
  └─ ƒ invalidateCacheAction() in 15ms node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js
[browser] Failed to fetch RSC payload for http://localhost:3000/. Falling back to browser navigation. TypeError: Failed to fetch

also the homepage or landing page should look like we shared the screenshot