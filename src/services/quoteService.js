const axios = require('axios');
const debug = require('debug')('app:quoteService');
// Service to handle quotes
function quoteService() {
  // Get book by an Id
  function getQuote() {
    return new Promise((resolve, reject) => {
      axios.get('https://quotes.rest/qod')
        .then((response) => {
          debug(response);
          resolve({ response });
        })
        .catch((error) => {
          reject(error);
          debug(error);
        });

    });
  }
  return { getQuote };
}

module.exports = quoteService();
