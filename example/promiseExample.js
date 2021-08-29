const { JSONStringify } = require('../dist/index');

const user = {
  name: 'John',
  age: 30,
  city: 'New York',
};

JSONStringify(user, null, 2)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
