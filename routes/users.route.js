var express = require('express');
var controller = require('../controllers/user.controller');
var validate = require('../validation/user.validate');
var multer = require('multer');

var upload = multer({ dest: './public/uploads/' });
var router = express.Router();
    
router.get('/', controller.index);
router.get('/create', controller.createview);
router.post('/create', upload.single('avatar'), validate.postCreate, controller.create);

router.get('/search', controller.search);

router.get('/:id', controller.view);
module.exports = router;
