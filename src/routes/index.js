// const debug = require('debug')('app');
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
      try {
        const quote = await quoteService.getQuote();
        res.render('index', { title: 'Welcome to BookRingo', quote: quote.result, nav });
      } catch (error) {
        res.render('index', { title: 'Welcome to BookRingo', quote: error, nav });
      }
    }());
  });
};

module.exports = mountRoutes;
