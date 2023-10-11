const express = require('express');
const ProductsService = require('./../Services/product.service')
const router = express.Router();

const service = new ProductsService();

 router.get('/:id', async (req, res, next) => {
try {
    const { id } = req.params;
    const product = await service.findOne(id);
    res.json(product);
} catch (error) {
  next(error);

}
});

 router.get('/', async (req, res) => {
  const products = await service.find();
    res.json(products);

 });
 router.get('/filter', (req, res) => {
  res.send('Yo soy un filtro');
 });

 router.post('/', async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);
});

 router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body)
    res.json(product);
  } catch (error) {
    next(error)
  }
})


 router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const body = await req.body;
  res.json({
    message: 'update',
    data: body,
    id
  });
});

 router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rta = service.delete(id)

  res.json(rta);
});

module.exports = router;
