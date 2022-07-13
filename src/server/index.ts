import Koa from "koa";
import Router from "koa-router";

const app = new Koa();

const router = new Router();

router.get("/_health", (ctx) => {
  ctx.body = "OK";
});

app.use(router.routes());

app.listen(9000);
