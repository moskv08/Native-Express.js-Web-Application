// Main router modul
const nav = [
  { title: 'Books', link: '/books' },
  { title: 'Authors', link: '/authors' },
];

const bookRouter = require('./bookRoutes')(nav);
const authorRouter = require('./authorRoutes')(nav);

module.exports = (app) => {
  // Router
  app.use('/books', bookRouter);
  app.use('/authors', authorRouter);

  // Start page
  app.get('/', (req, res) => {
    res.render('index', { title: 'Welcome to BookRingo', nav });
  });
};
