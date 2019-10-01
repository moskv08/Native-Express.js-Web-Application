// const debug = require('debug')('app:bookService');
const db = require('../db');

// Responsible for handling books
function bookService() {
  // Get all books from database
  function getAllBooks() {
    return new Promise((resolve, reject) => {
      // Query database
      const result = db.query('SELECT isbn, title, genre FROM books');
      if (result) {
        resolve(result);
      } else {
        const err = new Error('Sorry. Something went wrong here.');
        reject(err);
      }
    });
  }

  // Get book by an Id
  function getBookById(id) {
    return new Promise((resolve, reject) => {
      // Query database
      const result = db.query('SELECT * FROM books b INNER JOIN authors a ON (b.author_id = a.author_id) WHERE isbn = $1', [id]);
      if (result) {
        resolve(result);
      } else {
        const err = new Error('Sorry. Something went wrong here.');
        reject(err);
      }
    });
  }

  return { getAllBooks, getBookById };
}

module.exports = bookService();
