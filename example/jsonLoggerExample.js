const { JSONLogger } = require('../dist/index');

const user = {
  name: 'John',
  age: 30,
  city: 'New York',
};

JSONLogger({ data: user, space: 2 });