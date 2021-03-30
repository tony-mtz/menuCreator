const express = require('express');
const path = require('path');
const router = express.Router();
const passport = require('passport');
const bcrypt = require('bcrypt')

const authController = require('../controllers/authController')

router.get('/register', (req,res)=>{
  res.send('<h1>...where is the register form? </h1>')
})

router.post('/register', authController.register, (req, res, next) => {
  console.log('AUTH Controller Register at start of register.....')
  passport.authenticate('local', function(err, user, info) {
    console.log('at /register then auth local line 16.....')
    if (err) { 
      return next(err); 
    }
    if (!user) { 
      return res.send('<h1>not registered?</h1>'); 
    }
    req.logIn(user, function(err) {
      if (err) { 
        return next(err); 
      }
      return res.send('you are now logged in!');
    });
  })(req, res, next);
});

router.get('/login', (req,res)=>{
  return res.send('<h1>where is the login form?</h1>')
});

/*
 
*/
router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { 
      return next(err); 
    }
    if (!user) { 
      return res.redirect('/login'); 
    }
    req.logIn(user, function(err) {
      if (err) { return next(err); 
      }
      return res.redirect('/');
    });
  })(req, res, next);
});

module.exports = router;