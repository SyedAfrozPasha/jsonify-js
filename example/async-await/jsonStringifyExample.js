const { JSONStringify } = require('jsonify-js');

const getStringifiedData = async () => {
  try {
    const user = {
      name: 'John',
      age: 30,
      city: 'New York',
    };

    const stringifiedData = await JSONStringify(user, null, 2);

    return stringifiedData;
  } catch (err) {
    // Handler error
    console.error(err);
  }
};

const main = async () => {
  const result = await getStringifiedData();
  console.log('Result:', result);
};

main();
