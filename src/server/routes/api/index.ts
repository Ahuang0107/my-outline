import Router from "koa-router";
import Koa from "koa";
import koaBody from "koa-body";
import documents from "./documents";

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

router.use("/", documents.routes());

api.use(router.routes());

export default api;
