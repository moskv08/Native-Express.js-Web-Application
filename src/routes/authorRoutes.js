// Bring in modules
const express = require('express');
const db = require('../db');
// const chalk = require('chalk');
// const debug = require('debug')('app:bookRoutes');

const authorRouter = express.Router();

function router(nav) {
  // Get routes for a list of books
  authorRouter.route('/')
    .all((req, res, next) => {
      (async function query() {
        // Querry
        const { rows } = await db.query('SELECT * FROM authors');
        req.authors = rows;
        next();
      }());
    }).get((req, res) => {
      res.render('authors/authorListView',
        {
          title: 'List of Authors',
          nav,
          authors: req.authors,
        });
    });

  return authorRouter;
}

module.exports = router;
