// deals with user information in sessions/cookies
const passport = require('passport');
// Bring in the passport strategy
require('./strategies/local.strategy')();

function passportConfig(app) {
  // Initialize
  app.use(passport.initialize());
  app.use(passport.session());

  // Stores user in sessions
  passport.serializeUser((user, done) => {
    // Handel callback
    done(null, user);
  });

  // Retrieves user from session
  passport.deserializeUser((user, done) => {
    // Find user by id
    done(null, user);
  });
}

module.exports = passportConfig;
