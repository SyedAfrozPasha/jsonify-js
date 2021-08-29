# jsonify-js - JSON with Promise Support

A simple and light-weight JSON handler with promise support. It provide promised version of the JSON built-in methods such as `JSON.Stringify` and `JSON.parse`. It also had an utility method (`JSONLogger`) to log the JSON data on to a JSON file.

## Installation

```bash
npm install jsonify-js
```

## Usage

You can use the `JSONStringify` and `JSONParse` methods using Promises or Async/Await syntax.

### Using Promise Syntax

- `JSONStringify` - Converts the js object/array into stringified JSON.

  ```javascript
  const { JSONStringify } = require('jsonify-js')

  const user = {
    name: 'John',
    age: 30,
    city: 'New York',
  }

  JSONStringify(user)
    .then((result) => {
      console.log(result)
      // Handle the stringified result
    })
    .catch((error) => {
      // Handler error
      console.error(error)
    })
  ```

- `JSONParse` - Converts the stringified JSON into js object/array.

  ```javascript
  const { JSONParse } = require('jsonify-js')

  const stringifiedData = '{"name":"John","age":30,"city":"New York"}'

  JSONParse(stringifiedData)
    .then((result) => {
      // Handle the JSON parse result
      console.log(result)
    })
    .catch((error) => {
      // Handler error
      console.error(error)
    })
  ```

### Using Async/Await Syntax

- `JSONStringify` - Converts the js object into stringified JSON.

  ```javascript
  const { JSONStringify } = require('jsonify-js')

  const getStringifiedData = async () => {
    try {
      const user = {
        name: 'John',
        age: 30,
        city: 'New York',
      }

      const stringifiedData = await JSONStringify(user)

      return stringifiedData
    } catch (err) {
      // Handler error
      console.error(err)
    }
  }
  const main = async () => {
    const result = await getStringifiedData()
    console.log('Result:', result)
  }

  main()
  ```

- `JSONParse` - Converts the stringified JSON into js object.

  ```javascript
  const { JSONParse } = require('jsonify-js')

  const getParsedData = async () => {
    try {
      const stringifiedData = '{"name":"John","age":30,"city":"New York"}'

      const parsedData = await JSONParse(stringifiedData)

      return parsedData
    } catch (err) {
      // Handler error
      console.error(err)
    }
  }
  const main = async () => {
    const result = await getParsedData()
    console.log('Result:', result)
  }

  main()
  ```

### JSON logger

- `JSONLogger` - Can be used to log the JSON data to a JSON file.

  ```javascript
  const { JSONLogger } = require('jsonify-js')

  const user = {
    name: 'John',
    age: 30,
    city: 'New York',
  }

  // Save the stringified data in a JSON file
  JSONLogger({ data: user, space: 2, filePath = './log.json' })
  ```

## Documentation

### JSONStringify

`JSONStringify` works similar to the build-in JSON method `JSON.stringify`. You can also pass the optional parameters such as `replacer` or `space`.

#### Syntax

```javascript
JSONStringify(value)
JSONStringify(value, replacer)
JSONStringify(value, replacer, space)
```

Read more about the optional parameters <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify" target="_blank">here</a>

### JSONParse

`JSONParse` works similar to the build-in JSON method `JSON.parse`. You can also pass the optional parameters `reviver`.

#### Syntax

```javascript
JSONParse(text)
JSONParse(text, reviver)
```

Read more about the optional parameters <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse" target="_blank">here</a>

### JSONLogger

`JSONLogger` can be used to log the JSON data into a JSON file.

#### Syntax

```javascript
JSONLogger({
  data,
  filePath,
  replacer,
  space,
  writeFileOption,
  customSuccessMessage,
})
```

**Parameters:**

- `data` _(required)_: Data in `object` or `array` format.
- `filePath` _(optional)_: Location/Path of the JSON file where you want to log/save the data. Default value is set to `./log.json`.
- `replacer` _(optional)_: You can use the custom replacer function. Default value is `null`. Refer [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) for more details.
- `space` _(optional)_: You can pass in the space value in number. `space = 2` means normal space and `space = 4` means tab space. Refer [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) for more details.
- `fileWriteOptions` _(optional)_: Refer [this](https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback) for more details. Default value is set to `utf8`.
- `customSuccessMessage` _(optional)_: You can pass the custom message which will be displayed on console on completion of logging. Default value is set to `jsonify-js: Log file has been created!`.

## Examples

Refer [this](https://github.com/SyedAfrozPasha/jsonify-js/tree/main/example) for more examples
## License

Licensed under MIT

Copyright (c) 2021 [Syed Afroz Pasha](https://github.com/SyedAfrozPasha)
