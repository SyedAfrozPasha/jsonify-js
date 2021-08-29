// const { JSONParse } = require('jsonify-js');
const { JSONParse } = require('../../src/index');

const getParsedData = async () => {
  try {
    const stringifiedData = '{"name":"John","age":30,"city":"New York"}';

    const parsedData = await JSONParse(stringifiedData);

    return parsedData;
  } catch (err) {
    // Handler error
    console.error(err);
  }
};

const main = async () => {
  const result = await getParsedData();
  console.log('Result:', result);
};

main();
