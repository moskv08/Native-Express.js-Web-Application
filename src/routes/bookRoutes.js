// Bring in modules
const express = require('express');
const { Client } = require('pg');
const debug = require('debug')('app:bookRoutes');
const chalk = require('chalk');

const bookRouter = express.Router();

function router(nav) {
  const books = [
    {
      title: 'The holly grail',
      genre: 'Fantasy',
      author: 'John Doe',
      read: false,
    },
    {
      title: 'Life after',
      genre: 'Romance',
      author: 'Jennifer Rowl',
      read: false,
    },
    {
      title: 'Peter Pan',
      genre: 'Fantasy',
      author: 'Marry Stripes',
      read: false,
    },
  ];

  // Get routes for a list of books
  bookRouter.route('/')
    .get((req, res) => {
      const client = new Client();
      client.connect();
      client.query('SELECT * FROM books').then((result) => {
        res.render('bookListView',
          {
            title: 'List of Books',
            nav,
            books: result.rows,
          });
        client.end();
      }).catch((e) => debug(chalk.red(e.stack)));
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
