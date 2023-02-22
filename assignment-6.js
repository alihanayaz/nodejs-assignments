const Koa = require('koa');
const app = new Koa();

app.use((ctx) => {
  if (ctx.path === '/') {
    ctx.body = '<h1>Main Page</h1>';
  } else if (ctx.path === '/about') {
    ctx.body = '<h1>About Page</h1>';
  } else if (ctx.path === '/contact') {
    ctx.body = '<h1>Contact Page</h1>';
  } else {
    ctx.throw(404);
  }
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
