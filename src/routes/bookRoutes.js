// Bring in modules
const express = require('express');

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

  // Define get routes
  bookRouter.route('/')
    .get((req, res) => {
      res.render('bookListView',
        {
          title: 'List of Books',
          nav,
          books,
        });
    });

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
