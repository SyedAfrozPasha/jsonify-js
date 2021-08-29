const { join } = require('path');

const JSONStringify = require(join(__dirname, 'jsonStringify'));
const JSONParse = require(join(__dirname, 'jsonParse'));
const JSONLogger = require(join(__dirname, 'jsonLogger'));

module.exports = {
  JSONStringify,
  JSONParse,
  JSONLogger,
};
