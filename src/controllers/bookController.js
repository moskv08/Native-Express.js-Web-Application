// const debug = require('debug')('app:bookController');
// Bring in dbcontext
const db = require('../db');

function bookController(bookService, nav) {
  // Protect routes
  function useMiddleware(req, res, next) {
    if (req.user) {
      next();
    } else {
      res.redirect('/');
    }
  }

  // Get all books from database
  function getAllBooks(req, res) {
    (async function query() {
      // Querry
      const { rows } = await bookService.getAllBooks();
      req.books = rows;
      res.render('books/bookListView',
        {
          title: 'List of Books',
          nav,
          books: req.books,
        });
    }());
  }

  // Get a single book from database by id
  function getBookById(req, res) {
    (async function query() {
      const { id } = req.params;
      // Querry
      const { rows } = await db.query('SELECT * FROM books b INNER JOIN authors a ON (b.author_id = a.author_id) WHERE isbn = $1', [id]);
      [req.book] = rows; // Use array destructuring
      res.render('books/bookItemView',
        {
          title: 'Book',
          nav,
          book: req.book,
        });
    }());
  }

  // Revealing Module Pattern
  return {
    getAllBooks,
    getBookById,
    useMiddleware,
  };
}

module.exports = bookController;
