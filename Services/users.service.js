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
  create(data) {
    const newUser = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.users.push(newUser);
    return newUser;
  }
  find() {
    return this.users;

  }
  findOne(id) {
    return this.users.find(item => item.id === id);

  }
  update(id, changes) {
    const index = this.users.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('user not found');

  }
  const user = this.users[index];
  this.products[index] = {
  ...user,
  ...changes
  };

}
  delete(id) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('user not found');
  }
  this.users.splice(index,1);
  return { id };
}
}
module.exports = UsersService
