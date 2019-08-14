// Bring in modules
const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Log web traffic to console
app.use(morgan('tiny'));

// bring in static files
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')));

// Set views directory & template engine
app.set('views', './src/views');
app.set('view engine', 'ejs');


const nav = [
  { title: 'Books', link: '/books' },
  { title: 'Authors', link: '/authors' },
];

// use Book router
const bookRouter = require('./src/routes/bookRoutes')(nav);

app.use('/books', bookRouter);
app.get('/', (req, res) => {
  res.render('index', { title: 'Thug Life', nav });
});

app.listen(port, () => {
  debug(chalk.green(`Listening on port: ${port}`));
});
