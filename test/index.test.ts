import { describe, expect, it } from "bun:test";
import { app } from "../src/index";

describe("Elysia Server Routes", () => {
  it("GET / returns 200 and ok message", async () => {
    const response = await app.handle(new Request("http://localhost:3000/"));
    expect(response.status).toBe(200);

    const data = (await response.json()) as { status: string; message: string };
    expect(data.status).toBe("ok");
    expect(data.message).toBe("Server ElysiaJS is running successfully with Bun!");
  });

  it("GET /health returns 200 and healthy status", async () => {
    const response = await app.handle(new Request("http://localhost:3000/health"));
    expect(response.status).toBe(200);

    const data = (await response.json()) as { status: string; uptime: number };
    expect(data.status).toBe("healthy");
    expect(typeof data.uptime).toBe("number");
  });
});
