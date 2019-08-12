# :cyclone: Express.js - Native Web Application

### Introduction

### How to run the App

1) Just run a simple
```bash
npm install
```

For **Linux** user simple type **npm start**.
If you're on **Windows** use the following home grown script:
```bash
npm run starwin
```

### Required tooling setup

#### Debugging

To do smart path joining of relative paths **Path** was used here.
Also the following npm modules haven been used to have colorized debuggin enabled:

> **Debug**
> Used to display information in debug mode (replaced console.log)

> **Chalk**
> Colorize debug messages

> **Morgan**
> Used for http traffic logging

#### Linting

Within this Project **ESLint** with the [AirBnB Style Guide](https://github.com/airbnb/javascript) is used.

So the _.eslintrc.js_ configuration file looks like as follows:
```javascript
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
  },
};
```