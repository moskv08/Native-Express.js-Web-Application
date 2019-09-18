const debug = require('debug')('app:authController');
// const passport = require('passport');
// Bring in dbcontext
const db = require('../db');

function authController(nav) {
  // Sign a user in
  // function signInUser() {
  //   try {
  //     passport.authenticate('local', {
  //       successRedirect: '/auth/profile',
  //       failureRedirect: '/auth/signin',
  //       failureFlash: true,
  //     });
  //   } catch (error) {
  //     debug(error);
  //   }
  // }

  // Show login page to user
  function showLoginPage(req, res) {
    res.render('signin', {
      nav,
      title: 'Sign In',
    });
  }

  // Create a new user account in the database
  function signUpUser(req, res) {
    // Create the user
    const { email, password } = req.body;
    (async function addUser() {
      const query = 'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING userid';
      const values = [email, password];

      try {
        await db.query('BEGIN');
        const { rows } = await db.query(query, values);
        // [req.users] = rows;
        await db.query('COMMIT');
        // Redirect
        req.login(rows[0], () => {
          res.redirect('/auth/profile');
        });

        debug(rows);
      } catch (error) {
        await db.query('ROLLBACK');
        throw error;
      }
    }()).catch((e) => debug(e.stack));
  }

  // Show user profil
  function showUserProfil(req, res) {
    // Protect route (user validation)
    if (req.user) {
      res.json(req.user);
    } else {
      res.redirect('/');
    }
  }

  // Revealing Module Pattern
  return {
    signUpUser,
    showUserProfil,
    showLoginPage,
  };
}

module.exports = authController;
