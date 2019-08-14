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
    res.render('books', { title: 'Books', nav: [{ title: 'Books', link: '/books' }], books });
  });

bookRouter.route('/single').get((req, res) => {
  res.send('Hi single book');
});

module.exports = bookRouter;
