const { JSONLogger } = require('jsonify-js');

const user = {
  name: 'John',
  age: 30,
  city: 'New York',
};

// This will create a result.json file and write the JSON stringified data to the file
JSONLogger({
  data = user,
  filePath = './result.json',
  replacer = null,
  space = 2,
  writeFileOption = 'utf8',
  customSuccessMessage = 'JSON data logged!',
});
