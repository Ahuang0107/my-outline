import Koa from "koa";
import mount from "koa-mount";
import api from "../routes/api";

export default function init(app: Koa = new Koa()): Koa {
  app.use(mount("/api", api));
  return app;
}
