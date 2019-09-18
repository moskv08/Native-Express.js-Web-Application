// const debug = require('debug')('app:authRoutes');
// Bring in modules
const express = require('express');
const passport = require('passport');
const authController = require('../controllers/authController');

const authRouter = express.Router();

function router(nav) {
  // Bring in functions as objects
  const {
    signUpUser,
    showUserProfil,
    showLoginPage,
  } = authController(nav);

  // Create & sign in a user
  authRouter.route('/signUp').post(signUpUser);

  // Sign in a user
  authRouter.route('/signin')
    .get(showLoginPage)
    .post(
      passport.authenticate('local', {
        successRedirect: '/auth/profile',
        failureRedirect: '/auth/signin',
        failureFlash: true,
      }),
    );

  // Display the user profile
  authRouter.route('/profile').get(showUserProfil);

  return authRouter;
}

module.exports = router;
