const productsRouter = require('./products');
const userRouter = require('./users')
const categoryUser = require('./categories')

function routerApi(app) {
  app.use('/products', productsRouter);
  app.use('/users', userRouter);
  app.use('/categories', categoryUser);
}

module.exports = routerApi;
