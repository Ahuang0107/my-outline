import Router from "koa-router";
import { Document } from "../../models";

const router = new Router();

router.post("documents.list", async (ctx) => {
  console.log(ctx.request.body);
  const { sort = "updatedAt", direction = "ASC" } = ctx.request.body;
  await Document.create({
    title: "test",
  });
  const documents = await Document.findAll();
  ctx.body = {
    data: documents,
  };
});

export default router;
