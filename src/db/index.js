// Import
const { Pool } = require('pg');

// Create connection pool
const pool = new Pool();

// Export
module.exports = {
  query: (text, params) => pool.query(text, params),
};
