import Router from "koa-router";
import { Document } from "../../models";
import { sequelize } from "../../database/sequelize";
import documentCreator from "../../commands/documentCreator";

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

router.post("documents.create", async (ctx) => {
  const { title = "", text = "" } = ctx.body;
  const document = await sequelize.transaction(async (transaction) =>
    documentCreator({
      title,
      text,
      transaction,
    })
  );
  ctx.body = {
    data: document,
  };
});

export default router;
