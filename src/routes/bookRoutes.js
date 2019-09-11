// Bring in modules
const express = require('express');
const bookController = require('../controllers/bookController');
const bookService = require('../services/bookService'):

const bookRouter = express.Router();

function router(nav) {

  // Bring functions as objects
  const { getAllBooks, getBookById, useMiddleware } = bookController(bookService, nav);

  // Protect the route
  bookRouter.use(useMiddleware);

  // Get routes for a list of books
  bookRouter.route('/').get(getAllBooks);

  // Get routes for a single book
  bookRouter.route('/:id').get(getBookById);

  return bookRouter;
}

module.exports = router;
