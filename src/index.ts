import { createServer } from "http";
import { createApp } from "./app";

const PORT = Number(process.env.PORT ?? 3001);

const app = createApp();
const server = createServer(app.callback());

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

function shutdown(signal: string) {
  console.log(`\n${signal} received, shutting down...`);
  server.close(() => {
    process.exit(0);
  });
}

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));
