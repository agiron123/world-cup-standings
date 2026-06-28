import { Hono } from "hono";
import { cors } from "hono/cors";

type Env = {
  DATABASE_URL: string;
};

const app = new Hono<{ Bindings: Env }>();

app.use("/*", cors());

app.get("/api/health", (c) => {
  return c.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.get("/api/standings", (c) => {
  // Placeholder — wire up to a World Cup API or database
  return c.json({
    groups: [
      { group: "A", standings: [] },
      { group: "B", standings: [] },
      { group: "C", standings: [] },
      { group: "D", standings: [] },
      { group: "E", standings: [] },
      { group: "F", standings: [] },
      { group: "G", standings: [] },
      { group: "H", standings: [] },
    ],
  });
});

export default app;