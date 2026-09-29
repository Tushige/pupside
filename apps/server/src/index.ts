import { createApp } from "./app";

const PORT = 10001;
const HOST = "127.0.0.1";

const { server } = createApp({
  version: { commit: "dev-example", buildTime: "09/28/2026" },
});

server.on("connection", () => {
  console.log("connection happened");
});

server.listen(PORT, HOST, () => {
  console.log(`server is listening on ${HOST}:${PORT}`);
});
