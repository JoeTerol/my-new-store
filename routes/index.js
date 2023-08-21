const express = require('express');

const productsRouter = require('./products');
const userRouter = require('./users')
const categoryUser = require('./categories');


function routerApi(app) {
  const router = express.Router ();

  app.use('/api/v1', router)
  router.use('/products', productsRouter);
  router.use('/users', userRouter);
  router.use('/categories', categoryUser);
}

module.exports = routerApi;
