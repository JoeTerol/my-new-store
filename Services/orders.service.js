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
  create() {

  }
  find() {
    return this.products;

  }
  findOne(id) {
    return this.orders.find(item => item.id === id);

  }
  update() {

  }
  delete() {

  }
}
module.exports = OrdersService;

