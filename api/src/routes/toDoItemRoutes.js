const express = require('express');
const routers = express.Router();
const UserController = require('../controllers/UserController');

// POST /login
routers.get('/todo', UserController.login);

module.exports = routers;
