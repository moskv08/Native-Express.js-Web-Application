// const debug = require('debug')('app:bookService');
const db = require('../db');

// Responsible for handling books
function bookService() {
  // Get all books from database
  function getAllBooks() {
    return new Promise((resolve, reject) => {
      const result = db.query('SELECT isbn, title, genre FROM books');
      resolve(result);
    });
  }

  // Get book by an Id
  function getBookById(id) {
    return new Promise((resolve, reject) => {
      const result = db.query('SELECT * FROM books b INNER JOIN authors a ON (b.author_id = a.author_id) WHERE isbn = $1', [id]);
      resolve(result);
    });
  }

  return { getAllBooks, getBookById };
}

module.exports = bookService();
