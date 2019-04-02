var express = require('express');
var controller = require('../controllers/auth.controller');
var validate = require('../validation/user.validate');

var router = express.Router();

router.get('/login', controller.loginForm);
router.post('/login', validate.loginValidation, controller.postLogin);
module.exports = router;