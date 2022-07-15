import Router from "koa-router";

const router = new Router();

router.post("documents.list", async (ctx) => {
  ctx.body = "hello world";
});

export default router;
