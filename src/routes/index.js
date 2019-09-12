const debug = require('debug')('app');
// Main router modul
const nav = [
  { title: 'Books', link: '/books' },
  { title: 'Authors', link: '/authors' },
];

const quoteService = require('../services/quoteService');

const authRouter = require('./authRoutes')(nav);
const bookRouter = require('./bookRoutes')(nav);
const authorRouter = require('./authorRoutes')(nav);

const mountRoutes = (app) => {
  // Router
  app.use('/auth', authRouter);
  app.use('/books', bookRouter);
  app.use('/authors', authorRouter);

  // Start page
  app.get('/', (req, res) => {
    (async function query() {
      const quote = await quoteService.getQuote();
      debug(quote);
      res.render('index', { title: 'Welcome to BookRingo', quote, nav });
    }());
  });
};

module.exports = mountRoutes;
