const JSONParse = (data, reviver = null) => {
  return new Promise((resolve, reject) => {
    try {
      let output = JSON.parse(data, reviver);
      resolve(output);
    } catch (error) {
      reject(error);
    }
  });
};

export default JSONParse;
