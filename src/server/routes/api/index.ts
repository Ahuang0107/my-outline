import Router from "koa-router";
import Koa from "koa";
import documents from "./documents";

const api = new Koa();
const router = new Router();

router.use("/", documents.routes());

api.use(router.routes());

export default api;
