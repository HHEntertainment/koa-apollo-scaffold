import * as Koa from 'koa';
import { renderRouter } from './render.middleware';
// import { applyMiddlewareToApp } from './graphql.middleware';

const app = new Koa();

// applyMiddlewareToApp(app);
app.use(renderRouter.routes());
app.use(renderRouter.allowedMethods());

app.listen(8000);
