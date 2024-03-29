const shortid = require('shortid');
var db = require('../db');


module.exports.index = function (req, res) {
    res.render('users/index', { users: db.get('users').value() });
};

module.exports.create = (req, res) => {
    req.body.id = shortid.generate();
    req.body.avatar = req.file.path.split('/').slice(1).join('/');
    
    db.get('users').push(req.body).write();
    res.redirect('/users')

};

module.exports.createview = (req, res) => {
    res.render('users/create');
};

module.exports.search = (req, res) => {
    var matchedUsers = db.get('users').value().filter(user => user.name.toLowerCase().indexOf(req.query.name.toLowerCase()) != -1);
    res.render('users/index', { users: matchedUsers });
};

module.exports.view = (req, res) => {
    var user = db.get('users').find({ id: req.params.id }).value();
    console.log(user);
    res.render('users/view', { user: user });

};