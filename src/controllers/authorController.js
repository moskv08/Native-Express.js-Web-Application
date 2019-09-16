
function authorController(authorService, nav) {
  // Protect routes
  function useMiddleware(req, res, next) {
    if (req.user) {
      next();
    } else {
      res.redirect('/');
    }
  }

  function getAllAuthors(req, res) {
    (async function query() {
      // Querry
      const { rows } = await authorService.getAllAuthors();
      req.authors = rows;
      res.render('authors/authorListView',
        {
          title: 'List of Authors',
          nav,
          authors: req.authors,
        });
    }());
  }

  // Revealing Module Pattern
  return {
    useMiddleware,
    getAllAuthors,
  };
}

module.exports = authorController;
