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
  create(data) {
    const newCategory = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.categories.push(newCategory);
    return newCategory
  }
  find() {
    return this.categories;

  }
  findOne(id) {
    return this.categories.find(item => item.id === id);
  }
  update(id, changes) {
    const index = this.categories.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('category not found');
    }
    const category = this.categories[index];
    this.categories[index] = {
      ...category,
      ...changes
    }

  }
  delete(id) {
    const index = this.categories.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('category not found');
    }
    this.categories.splice(index, 1);
    return { id };

  }
}

module.exports = CategoresServices;

