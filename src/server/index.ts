import Koa from "koa";
import http from "http";
import Router from "koa-router";
import logger from "koa-logger";
import { uniq } from "lodash";
import { AddressInfo } from "net";
import services from "./services";
import Logger from "./logging/logger";
import env from "./env";

const serviceNames = uniq("web".split(",").map((service) => service.trim()));

async function start() {
  const app = new Koa();
  const server = http.createServer(app.callback());
  const router = new Router();

  app.use(logger((str) => Logger.info("http", str)));

  router.get("/_health", (ctx) => {
    ctx.body = "OK";
  });

  app.use(router.routes());

  // eslint-disable-next-line no-restricted-syntax
  for (const name of serviceNames) {
    if (!Object.keys(services).includes(name)) {
      throw new Error(`Unknown service ${name}`);
    }
    Logger.info("lifecycle", `Starting ${name} service`);
    const init = services[name];
    // eslint-disable-next-line no-await-in-loop
    await init(app, server);
  }

  server.on("error", (err) => {
    throw err;
  });
  server.on("listening", () => {
    const address = server.address();

    Logger.info(
      "lifecycle",
      `Listening on http://localhost:${(address as AddressInfo).port}`
    );
  });
  server.listen(env.PORT || "3000");
}

start().then(() => {
  Logger.info("lifecycle", "All service started");
});
