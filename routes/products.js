const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Product 3',
    price: 2000
  });
});

router.get('/', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index ++){
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price()),
      Image: faker.image.imageUrl(),
      });
   }
   res.json(products);
 });
 router.get('/filter', (req, res) => {
  res.send('Yo soy un filtro');
 });

 module.exports = router;

 router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body
  });
});
 router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id
  });
});
 router.put('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id
  });
});
 router.dwl('/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    message: 'deleted',
    id
  });
});
