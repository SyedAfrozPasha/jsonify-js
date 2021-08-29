const { writeFile } = require('fs');
const { join } = require('path');

const JSONStringify = require(join(__dirname, 'jsonStringify'));

const JSONLogger = async ({
  data,
  replacer = null,
  space = 2,
  filePath = './log.json',
  fileWriteOptions = 'utf8',
  customSuccessMessage = 'jsonify-js: Log file has been created!',
}) => {
  try {
    if (!data) {
      return;
    }

    const stringifyData = await JSONStringify(data, replacer, space);

    writeFile(filePath, stringifyData, fileWriteOptions, (err) => {
      if (err) {
        throw err;
      }
      console.log(customSuccessMessage);
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports = JSONLogger;
