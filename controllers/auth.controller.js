var md5 = require('md5');
var db = require('../db'); // không cần thay đổi path vì require trong routes
module.exports.loginForm = function (req, res) {
    res.render('auth/login');
}
module.exports.postLogin = function (req, res) {
    var user = db.get('users').find({email: req.body.email}).value();
    if(!user){
        res.render('auth/login', {
            errors: ['Email is not correct'],
            values: req.body
        });
        return;
    }
    var hashedPassword = md5(req.body.password);
    if(user.password !== hashedPassword){
        res.render('auth/login', {
            errors: ['Password is not correct'],
            values: req.body
        });
        return;
    }
    res.cookie('userId', user.id, {signed: true});
    res.redirect('/users');
}