var express = require('express');
var controller = require('../controllers/transfer.controller');

var router = express.Router();
router.get('/create',  controller.createForm);
router.post('/create', controller.createPost);
module.exports = router;