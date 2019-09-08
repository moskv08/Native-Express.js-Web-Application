// Bring in modules
const express = require('express');
const bookController = require('../controllers/bookController');
// Bring in dbcontext
const db = require('../db');

const bookRouter = express.Router();

function router(nav) {

  const { getAllBooks, getBookById } = bookController(nav);
  // Protect the route
  bookRouter.use((req, res, next) => {
    if (req.user) {
      next();
    } else {
      res.redirect('/');
    }
  });

  // Get routes for a list of books
  bookRouter.route('/').get(getAllBooks);

  // Get routes for a single book
  bookRouter.route('/:id').get(getBookById);

  return bookRouter;
}

module.exports = router;
