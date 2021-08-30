const JSONStringify = (data, replacer = null, space = null) => {
  return new Promise((resolve, reject) => {
    try {
      let output = JSON.stringify(data, replacer, space);
      resolve(output);
    } catch (error) {
      reject(error);
    }
  });
};

export default JSONStringify;
