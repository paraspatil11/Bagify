const userModel = require('../models/user-model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { generateToken } = require('../utils/generateToken');

module.exports.registerUser = async (req, res) => {
try {
    let { fullname, email, password } = req.body;

    let user =  await userModel.findOne({ email: email });
    if(user) {
      req.flash('error', 'User already exists');
      return res.redirect('/');
      }

    bcrypt.genSalt(10, (err, salt) => {
      if (err) return res.status(500).send(err.message);

      bcrypt.hash(password, salt, async (err, hash) => {
        if (err) return res.status(500).send(err.message);

        try {
          const user = await userModel.create({ fullname, email, password: hash });
          let token = generateToken(user);
          res.cookie('token',token);
          res.send('User created successfully');
        } catch (error) {
          res.status(500).send(error.message);
        }
      });
    });

  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports.loginUser = async (req, res) => {
    let { email, password } = req.body;
    let user = await userModel.findOne({ email: email });
    if (!user) {
      req.flash("error", "Invalid email or password");
      return res.redirect("/");
    }
    bcrypt.compare(password, user.password, (err, result) => {
      if(result){
        let token = generateToken(user);
        res.cookie('token',token);
        res.redirect('/shop');
      } else{
        req.flash('error', 'Invalid email or password');
        res.redirect('/');
      }
  })
};

module.exports.logoutUser = (req, res) => {
  res.clearCookie('token');
  res.redirect('/');
};