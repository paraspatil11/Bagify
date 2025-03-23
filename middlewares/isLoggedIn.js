const jwt = require('jsonwebtoken');
const userModel = require('../models/user-model');

module.exports = async (req, res, next) => {
    try {
        // Ensure cookies are available
        if (!req.cookies || !req.cookies.token) {
            req.flash('error', 'You need to login to access this page');
            return res.redirect('/');
        }

        // Verify the token
        const decoded = jwt.verify(req.cookies.token, process.env.JWT_KEY);

        // Find the user in the database
        const user = await userModel.findOne({ email: decoded.email }).select('-password');
        if (!user) {
            req.flash('error', 'User not found. Please login again.');
            return res.redirect('/');
        }

        // Attach user to the request object
        req.user = user;
        next();
    } catch (err) {
        // Handle specific JWT errors
        if (err.name === 'TokenExpiredError') {
            req.flash('error', 'Your session has expired. Please login again.');
        } else {
            req.flash('error', 'You need to login to access this page');
        }

        // Log the error for debugging
        console.error('Authentication error:', err);

        // Redirect to the login page
        res.redirect('/');
    }
};