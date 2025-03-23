const express = require('express');
const router = express.Router();
const ownerModel = require('../models/owner-model');

if (process.env.NODE_ENV === 'development'){
  router.post('/create', async (req, res) => {
    let owners = await ownerModel.find();
    if (owners.length >0){
      return res
        .status(500)
        .send('Owner already exists');
    }

    let { fullname, email, password } = req.body;
    let createdOwner = await ownerModel.create({
      fullname,
      email,
      password,
    });
    res.status(201).send(createdOwner);
  }
  
);
};


router.get('/admin', (req, res) => {
    const success = req.flash('success') || []; // Retrieve success messages from flash (if any)
    res.render('createproducts', { success });
});


module.exports = router;