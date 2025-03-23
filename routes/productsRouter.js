const express = require('express');
const router = express.Router();
const Product = require('../models/product-model');
const upload = require('../config/multer-config');

router.post('/create', upload.single("image"), async (req, res) => {
  try {let { name, price, discount, bgcolor, panelcolor, textcolor } = req.body;
  let product = await Product.create({
    image: req.file.buffer,
    name,
    price,
    discount,
    bgcolor,
    panelcolor,
    textcolor
  })

  req.flash('success', 'Product created successfully!');
  res.redirect('/owners/admin');
} 
  catch (err) {
    res.send(err.message);
  
  }
});

module.exports = router;