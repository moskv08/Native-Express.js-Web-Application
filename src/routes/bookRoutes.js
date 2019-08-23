// Bring in modules
const express = require('express');
// Bring in dbcontext
const db = require('../db');

const bookRouter = express.Router();

function router(nav) {
  // Get routes for a list of books
  bookRouter.route('/')
    .get((req, res) => {
      (async function query() {
        // Querry
        const { rows } = await db.query('SELECT * FROM books');
        res.render('bookListView',
          {
            title: 'List of Books',
            nav,
            books: rows,
          });
      }());
    });

  // Get routes for a single book
  bookRouter.route('/:id').get((req, res) => {
    (async function query() {
      const { id } = req.params;

      // Querry
      const { rows } = await db.query('SELECT * FROM books WHERE isbn = $1', [id]);
      res.render('bookView',
        {
          title: 'Book',
          nav,
          book: rows,
        });
    }());
  });

  return bookRouter;
}

module.exports = router;
