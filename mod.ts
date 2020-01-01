import * as cookie from "https://deno.land/std/http/cookie.ts";

export default async function(ctx, next) {
  ctx.state.cookies = { ...cookie }
  await next();
}
