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
  function getBookById() {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }

  return { getAllBooks, getBookById };
}

module.exports = bookService();
