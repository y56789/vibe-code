import { Elysia } from "elysia";

const port = Number(process.env.PORT) || 3000;

const app = new Elysia()
  .get("/", () => ({
    status: "ok",
    message: "Server ElysiaJS is running successfully with Bun!",
    timestamp: new Date().toISOString(),
  }))
  .get("/health", () => ({
    status: "healthy",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  }))
  .listen(port);

console.log(`🦊 Elysia server is running at http://${app.server?.hostname}:${app.server?.port}`);

export { app };
export type App = typeof app;
