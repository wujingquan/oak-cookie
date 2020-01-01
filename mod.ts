import {
  Cookie,
  getCookies,
  setCookie,
  delCookie
} from "https://deno.land/std/http/cookie.ts";

export default async function(ctx, next) {
  ctx.state.cookies = {
    gets () {
      return getCookies(ctx.request)
    },
    get (name) {
      
    },
    set (_cookie: Cookie) {
      const cookie: Cookie = {
        expires: new Date(),
        maxAge: 123,
        domain: '',
        path: '/',
        secure: true,
        httpOnly: true,
        // sameSite?: SameSite;
        // unparsed?: string[];
        ..._cookie
      }
      return setCookie(ctx.response, cookie)
    },
    del (name) {
      return delCookie(ctx.response, name)
    }
  }
  await next();
}
