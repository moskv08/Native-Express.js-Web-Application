const debug = require('debug')('app:authRoutes');
// Bring in modules
const express = require('express');
const passport = require('passport');
// Bring in dbcontext
const db = require('../db');

const authRouter = express.Router();

function router(nav) {
  // Create & sign in a user
  authRouter.route('/signUp')
    .post((req, res) => {
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
    });
  authRouter.route('/signin')
    .get((req, res) => {
      res.render('signin', {
        nav,
        title: 'Sign In',
      });
    })
    .post(passport.authenticate('local', {
      successRedirect: '/auth/profile',
      failureRedirect: '/auth/signin',
      failureFlash: true,
    }));
  // Display the user profile
  authRouter.route('/profile')
    .get((req, res) => {
      res.json(req.user);
    });

  return authRouter;
}

module.exports = router;
