const { JSONStringify } = require('../dist/index');

const getStringifiedData = async () => {
  try {
    const user = {
      name: 'John',
      age: 30,
      city: 'New York',
    };

    const stringifiedData = await JSONStringify(user);

    return stringifiedData;
  } catch (err) {
    // Handler error
    console.error(err);
  }
};

const main = async () => {
    const result = await getStringifiedData();
    console.log('Result:', result);
}

main();
