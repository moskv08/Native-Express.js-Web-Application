# Express.js - Native Web Application :cyclone:  

### Introduction

This is a native **Node.js** web application using the web framework _Express.js_ with an _EJS_ template engine.
**PostgreSQL** serves as the backend database solution. I decided on purpose not to use the classic **MEAN Stack* as I just wanted to
experiment with a different kind of stack here. To have a strong use case is not the main goal during this small side project.

#### Middleware

As authentication middleware [Passport](http://www.passportjs.org) was used in these project. It is designed to serve a singular purpose: authenticate requests.  
```
# Define your prefered passport strategy (Authentication mechanisms) here:
src/config/strategies
```

The handle third-party-API's the promise based HTTP client [Axios](https://www.npmjs.com/package/axios) was used.

#### Debugging

To do smart path joining of relative paths, **Path** was used here.
Also the following npm modules haven been used to have a smart kind of debugging enabled:

1) **Debug**: Used to display information in debug mode (replaced console.log)
2) **Chalk**: Colorize debug messages
3) **Morgan**: Used for http traffic logging

#### Linting

Within this Project **ESLint** with the [AirBnB Style Guide](https://github.com/airbnb/javascript) is used.

So partly the _.eslintrc.js_ configuration file looks like as follows:
```javascript
  extends: [
    'airbnb-base',
  ],
};
```

#### Testing

Unit- and Integration-Testing was implemented with the **Mocha Test Framework**. All tests are stored in a dedicated _/test_ folder and are grouped by the same strucutre as in the _/src_ folder. The following modules are used to make testing more smart:
  
- **Chai**: BDD / TDD assertion library for node
- **Sinon**: Standalone test spies, stubs and mocks for JavaScript. 


### How to run the App

1) Just run a simple
```bash
npm install
```

2) Setup the database and make use of the [PGPASSFILE](https://www.postgresql.org/docs/9.1/libpq-pgpass.html) to set db connection password.
```bash
hostname:port:database:username:password
```
Alternatively define your password also in the _.env_ file (Not recommended).

3) Spin up your **PostgreSQL** database by using the _.sql_ script.
```
/sql_script/dbschema.sql
```

**Linux** users simply type **npm start** to spin up the app.
If you're on **Windows** use the following home grown script:

```bash
npm run starwin
```
