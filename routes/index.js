const express = require('express');
const  isLoggedIn  = require('../middlewares/isLoggedIn');
const router = express.Router();
const Product = require('../models/product-model')
const userModel = require('../models/user-model')

router.get('/', (req, res) => {
    let error = req.flash('error');
    res.render('index', { error , isLoggedIn: false });
});

router.get('/shop', isLoggedIn, async (req, res) => {
        const products = await Product.find(); 
        let success = req.flash('success');
        res.render('shop', { products , success});
});

router.get('/cart', isLoggedIn, async (req, res) => {
    let user = await userModel
    .findOne({email: req.user.email})
    .populate('cart');

    const bill = Number(user.cart[0].price) + 20 - Number(user.cart[0].discount);

    res.render('cart', { user, bill }); 
});

router.get('/addtocart/:productid', isLoggedIn, async (req, res) => {
    // let error = req.flash('error');
    let user = await userModel.findOne({email: req.user.email});
    user.cart.push(req.params.productid);
    await user.save();
    req.flash('success', 'Product added to cart');
    res.redirect('/shop');
});

router.get('/myaccount', isLoggedIn, async (req, res) => {
    try {
        const user = await userModel.findOne({ email: req.user.email }).populate('cart');
        res.render('myaccount', { user });
    } catch (error) {
        console.error(error);
        req.flash('error', 'Something went wrong! Please try again.');
        res.redirect('/shop');
    }
});


router.get('/logout', isLoggedIn, (req, res) => {
    res.render('shop')
});

module.exports = router; 