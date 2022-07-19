import Router from "koa-router";
import { Document } from "../../models";

const router = new Router();

router.post("documents.list", async (ctx) => {
  const { sort = "updatedAt", direction = "ASC" } = ctx.body;
  const documents = await Document.findAll({
    order: [[sort, direction]],
  });
  ctx.body = {
    data: documents,
  };
});

router.post("documents.info", async (ctx) => {
  const { id } = ctx.body;
  const document = await Document.findByPk(id as string);
  ctx.body = {
    data: document,
  };
});

export default router;
