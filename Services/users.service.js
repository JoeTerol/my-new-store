const faker = require('faker');

class UsersService {
  constructor() {
    this.users = [];
    this.generate();
  }
  generate() {
    const limit = 50;
    for (let i = 0; i < limit; i++) {
      this.users.push({
        id: faker.datatype.uuid(),
        username: faker.internet.username(),
        name: faker.name.findName(),
        email: faker.internet.email()
      });
    }
  }
  create() {

  }
  find() {
    return this.products;

  }
  findOne(id) {
    return this.users.find(item => item.id === id);

  }
  update() {

  }
  delete() {

  }
}
module.exports = UsersService
