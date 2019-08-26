// Bring in modules
const express = require('express');
// const db = require('../db');
const chalk = require('chalk');
const debug = require('debug')('app:authRoutes');

const authRouter = express.Router();

function router() {
  authRouter.post((req, res) => {
    debug(chalk.blue(req.body));
  });
  return authRouter;
}

module.exports = router;
