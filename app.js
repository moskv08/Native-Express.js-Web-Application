require('dotenv').config();
// Bring in modules
const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const mountRoutes = require('./src/routes');

const app = express();
const port = process.env.PORT || 3000;

// Log web traffic to console
app.use(morgan('tiny'));

// Bring in body parser for post methods
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: 'library', resave: true, saveUninitialized: true }));

// Configure passport
require('./src/config/passport.js')(app);

// Bring in static files
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')));

// Set views directory & template engine
app.set('views', './src/views');
app.set('view engine', 'ejs');

// Routing
mountRoutes(app);

app.listen(port, () => {
  debug(chalk.green(`Listening on port: ${port}`));
});
