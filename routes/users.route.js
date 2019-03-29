var express = require('express');
var controller = require('../controllers/user.controller');


var router = express.Router();
    
router.get('/', controller.index);
router.get('/create', controller.createview);
router.post('/create', controller.create);

router.get('/search', controller.search);

router.get('/:id', controller.view);
module.exports = router;
