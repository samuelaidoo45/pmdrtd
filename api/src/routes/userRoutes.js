const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// POST /login
router.get('/login', UserController.login);

module.exports = router;