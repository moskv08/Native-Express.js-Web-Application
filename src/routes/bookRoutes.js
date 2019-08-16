// Bring in modules
const express = require('express');
const { Client } = require('pg');

const bookRouter = express.Router();

function router(nav) {

  // Get routes for a list of books
  bookRouter.route('/')
    .get((req, res) => {

      (async function query() {
        // Connect
        const client = new Client();
        await client.connect();

        // Querry
        const result = await client.query('SELECT * FROM books')
        res.render('bookListView',
          {
            title: 'List of Books',
            nav,
            books: result.rows,
          });

        // Disconnect
        await client.end();
      }());
    });

  // Get routes for a single book
  bookRouter.route('/:id').get((req, res) => {
    const { id } = req.params;
    res.render('bookView',
      {
        title: 'Book',
        nav,
        book: books[id],
      });
  });

  return bookRouter;
}

module.exports = router;
