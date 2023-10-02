const faker = require('Faker');

class OrdersService {
  constructor() {
    this.orders = [];
    this.generate();
  }

  generate() {
    const limit = 20;
    for(let i = 0; i < limit; i++) {
      this.orders.push({
        id: faker.datatype.uiid(),
        customerName: faker.name.findName(),
        productName: faker.comerce.productName(),
        quantity: faker.datatype.number()
      });
    }
  }
  create(data) {
    const newOrder = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.orders.push(newOrder);
    return newOrder;

  }
  find() {
    return this.Orders;

  }
  findOne(id) {
    return this.orders.find(item => item.id === id);

  }
  update(id, changes) {
  const index = this.orders.findIndex(item => item.id === id)
  if (index === -1) {
    throw new Error('order not found');

  }
  const order = this.orders[index];
  this.orders[index] = {
    ...order,
    ...changes
  };

  }
  delete(id) {
    const index = this.orders.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('order not found')
    }
    this.orders.splice(index, 1);
    return { id };
  }
}
module.exports = OrdersService;

