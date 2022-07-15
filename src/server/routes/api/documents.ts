import Router from "koa-router";
import { Document } from "../../models";

const router = new Router();

router.post("documents.list", async (ctx) => {
  await Document.create({
    title: "test",
  });
  const documents = await Document.findAll();
  ctx.body = {
    data: documents,
  };
});

export default router;
