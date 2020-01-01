# oak-cookie

A middleware for [Oak](https://github.com/oakserver/oak), Based [Koa](https://github.com/koajs/koa) and [cookie](https://github.com/denoland/deno_std/blob/master/http/cookie.ts) .

## Example

```ts
import { Application } from "https://deno.land/x/oak/mod.ts";
import cookie from 'https://github.com/wujingquan/oak-cookie/blob/master/mod.ts';

const app = new Application();

app
  .use(cookie)
  .use(ctx => {
    ctx.state.cookies.get('something')
    ctx.state.cookies.set('something')
    ctx.state.cookies.del('something')
    ctx.response.body = "Hello World!";
  });

await app.listen("127.0.0.1:8000");
```