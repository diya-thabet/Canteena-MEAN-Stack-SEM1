const express = require('express');
const router = express.Router();
const authController = require('../Controllers/authController');

// Route to handle admin login
router.post('/login', authController.loginAdmin);

module.exports = router;
