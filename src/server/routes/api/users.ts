import Router from "koa-router";
import { User } from "../../models";

const router = new Router();

router.post("users.list", async (ctx) => {
  const { sort = "updatedAt", direction = "ASC" } = ctx.body;
  const users = await User.findAll({ order: [[sort, direction]] });
  ctx.body = {
    data: users,
  };
});

router.post("users.create", async (ctx) => {
  const { email } = ctx.body;
  const user = await User.create({
    email,
  });
  ctx.body = {
    data: user,
  };
});

export default router;
