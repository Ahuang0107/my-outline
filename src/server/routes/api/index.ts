import Router from "koa-router";
import Koa from "koa";
import koaBody from "koa-body";
import documents from "./documents";
import methodOverride from "../../middlewares/methodOverride";
import users from "./users";

const api = new Koa();
const router = new Router();

api.use(
  koaBody({
    multipart: true,
    formidable: {
      maxFieldsSize: 10 * 1024 * 1024,
    },
  })
);
api.use(methodOverride());

router.use("/", documents.routes());
router.use("/", users.routes());

api.use(router.routes());

export default api;
