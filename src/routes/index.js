// Main router modul
const nav = [
  { title: 'Books', link: '/books' },
  { title: 'Authors', link: '/authors' },
];

const authRouter = require('./authRoutes');
const bookRouter = require('./bookRoutes')(nav);
const authorRouter = require('./authorRoutes')(nav);

const mountRoutes = (app) => {
  // Router
  app.use('/auth', authRouter);
  app.use('/books', bookRouter);
  app.use('/authors', authorRouter);

  // Start page
  app.get('/', (req, res) => {
    res.render('index', { title: 'Welcome to BookRingo', nav });
  });
};

module.exports = mountRoutes;
