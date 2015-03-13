# coderbits
[![Build Status](https://travis-ci.org/rodrigo-medeiros/coderbits.svg?branch=master)](https://travis-ci.org/rodrigo-medeiros/coderbits)
> A wrapper for the coderbits API.

The simplest way to programmatically get [coderbits](https://coderbits.com) profiles in node.js.

## Install

```shell
npm install coderbits
```

## Usage

```javascript
var coderbits = require('coderbits');

coderbits('bit', function (error, profile) {
  if (!error) console.log(profile);
});
```

Searches using handles from linked accounts can be done passing the info in a object:

```javascript
var user = {
  user: 'bitmunkey',
  account: 'github'
};

coderbits(user, function (error, profile) {
  if (!error) console.log(profile);
});
```

If you want the profile already parsed, just add the `json` option to your search object:

```javascript
var user = {
  user: 'bit',
  json: true
};
```

## License

Licensed under the [MIT License](https://github.com/rodrigo-medeiros/coderbits/blob/master/LICENSE)
