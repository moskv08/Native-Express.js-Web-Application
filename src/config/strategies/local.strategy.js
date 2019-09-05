const debug = require('debug')('app:local.strategy');
// Bring in modules that deals with user information in sessions/cookies
const passport = require('passport');
const { Strategy } = require('passport-local');
// Bring in dbcontext
const db = require('../../db');

// local strategy
function localStrategy() {
  passport.use(new Strategy({
    usernameField: 'email',
    passwordField: 'password',
  }, (email, password, done) => {
    (async function verifyUser() {
      const query = 'SELECT * FROM users WHERE email = $1';
      const values = [email];

      try {
        // Try to get the user
        const { rows } = await db.query(query, values);
        if (rows[0].password === password) {
          done(null, rows);
        } else {
          done(null, false);
        }
      } catch (error) {
        debug(error.stack);
      }
    }());
  }));
}

module.exports = localStrategy;
