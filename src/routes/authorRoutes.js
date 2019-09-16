// Bring in modules
const express = require('express');
const authorController = require('../controllers/authorController');
const authorService = require('../services/authorService');

const authorRouter = express.Router();

function router(nav) {
  // Bring in functions as objects
  const { useMiddleware, getAllAuthors } = authorController(authorService, nav);

  // Protect the route
  authorRouter.use(useMiddleware);

  // Get routes for a list of authors
  authorRouter.route('/').get(getAllAuthors);

  return authorRouter;
}

module.exports = router;
