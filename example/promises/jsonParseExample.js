// const { JSONParse } = require('jsonify-js');
const { JSONParse } = require('../../src/index');

const stringifiedData = '{"name":"John","age":30,"city":"New York"}';

JSONParse(stringifiedData)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
