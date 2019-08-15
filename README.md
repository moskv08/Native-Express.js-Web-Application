# :cyclone: Express.js - Native Web Application

### Introduction

This is native Node.js web application using the web framework **Express.js** with an _EJS_ template engine.
**PostgreSQL** serves as the backend database solution. I decided on purpose not to use the classic **MEAN Stack* as I just wanted to
experiment with different kind of stack here.

### How to run the App

1) Just run a simple
```bash
npm install
```

**Linux** users simply type **npm start** to spin up the app.
If you're on **Windows** use the following home grown script:

```bash
npm run starwin
```

### Required tooling setup

#### Debugging

To do smart path joining of relative paths **Path** was used here.
Also the following npm modules haven been used to have colorized debuggin enabled:

1) **Debug**: Used to display information in debug mode (replaced console.log)
2) **Chalk**: Colorize debug messages
3) **Morgan**: Used for http traffic logging

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