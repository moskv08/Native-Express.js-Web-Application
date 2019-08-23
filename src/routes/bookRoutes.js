// Bring in modules
const express = require('express');
// const chalk = require('chalk');
// const debug = require('debug')('app:bookRoutes');
// Bring in dbcontext
const db = require('../db');

const bookRouter = express.Router();

function router(nav) {
  // Get routes for a list of books
  bookRouter.route('/')
    .all((req, res, next) => {
      (async function query() {
        // Querry
        const { rows } = await db.query('SELECT isbn, title, genre FROM books');
        req.books = rows;
        next();
      }());
    }).get((req, res) => {
      res.render('books/bookListView',
        {
          title: 'List of Books',
          nav,
          books: req.books,
        });
    });

  // Get routes for a single book
  bookRouter.route('/:id')
    .all((req, res, next) => {
      (async function query() {
        const { id } = req.params;
        // Querry
        const { rows } = await db.query('SELECT * FROM books b INNER JOIN authors a ON (b.author_id = a.author_id) WHERE isbn = $1', [id]);
        [req.book] = rows; // Use array destructuring
        next();
      }());
    })
    .get((req, res) => {
      res.render('books/bookItemView',
        {
          title: 'Book',
          nav,
          book: req.book,
        });
    });

  return bookRouter;
}

module.exports = router;
