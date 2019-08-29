// deals with user information in sessions/cookies
const passport = require('passport');
const { Strategy } = require('passport-local');

// local strategy
function localStrategy() {
  passport.use(new Strategy({
    usernameField: 'email',
    passwordField: 'password',
  }, (email, password, done) => {
    const user = {
      email, password,
    };
    done(null, user);
  }));
}

module.exports = localStrategy;
