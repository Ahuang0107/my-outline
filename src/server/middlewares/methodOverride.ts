import { Context, Next } from "koa";
import * as queryString from "querystring";

export default function methodOverride() {
  return async function methodOverrideMiddleware(ctx: Context, next: Next) {
    if (ctx.method === "POST") {
      ctx.body = ctx.request.body;
    } else if (ctx.method === "GET") {
      ctx.method = "POST";

      ctx.body = queryString.parse(ctx.querystring);
    }

    return next();
  };
}
