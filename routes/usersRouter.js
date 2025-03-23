const express = require('express');
const router = express.Router();
const isLoggedIn = require('../middlewares/isLoggedIn');
const { registerUser, loginUser, logoutUser } = require('../controllers/authController');


router.get('/', (req, res) => {
  res.send('Users');
});

router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/logout', logoutUser)

module.exports = router;
