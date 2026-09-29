import { HEALTH_PATH } from "@pupside/shared/paths";
import { createServer } from "node:http";
import type { IncomingMessage, ServerResponse } from "node:http";

export function createApp(options: { version: BuildVersion }) {
  const { commit, buildTime } = options.version;

  function handleRequest(req: IncomingMessage, res: ServerResponse) {
    console.log("handleRequest called");
    if (req.url === HEALTH_PATH) {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.end(
        JSON.stringify({
          ok: true,
          commit,
          buildTime,
        }),
      );
    } else {
      res.statusCode = 404;
      res.end("Not Found");
    }
  }

  const server = createServer(handleRequest);
  console.log("server created");

  async function close(): Promise<void> {}
  return {
    server,
  };
}

export type BuildVersion = {
  commit: string;
  buildTime: string;
};
