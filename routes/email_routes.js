const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController');

// Define your send email route
router.post('/send-email', emailController.sendEmail);

module.exports = router;