// Bring in modules
const express = require('express');

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

const bookRouter = express.Router();

// Define get routes
bookRouter.route('/')
  .get((req, res) => {
    res.render('books',
      {
        title: 'Books',
        nav: [{ title: 'Books', link: '/books' }],
        books,
      });
  });

bookRouter.route('/:1').get((req, res) => {
  const { id } = req.params;
  res.render('book',
    {
      title: 'Books',
      nav: [{ title: 'Books', link: '/books' }],
      book: books[id],
    });
});

module.exports = bookRouter;
