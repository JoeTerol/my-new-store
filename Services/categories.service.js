const faker = require('faker');

class CategoresServices {
  constructor() {
    this.categories = [];
    this.generate();
  }

  generate() {
    const limit = 10;
    for(let i = 0 ; i < limit; i++) {
      this.categories.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.departament(),
        description: faker.lorem.sentence(),
      });
    }
  }
  create() {

  }
  find() {

  }
  findOne(id) {
    return this.categories.find(item => item.id === id);
  }
  update() {

  }
  delete() {

  }
}

module.exports = CategoresServices;

