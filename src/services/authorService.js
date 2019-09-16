// const debug = require('debug')('app:authorService');
// Bring in dbcontext
const db = require('../db');

// Responsible for handling authors
function authorService() {
  // Get all books from database
  function getAllAuthors() {
    return new Promise((resolve, reject) => {
      const result = db.query('SELECT * FROM authors');
      resolve(result);
    });
  }

  return { getAllAuthors };
}

module.exports = authorService();
