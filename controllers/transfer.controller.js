var db = require('../db');
const shortid = require('shortid');

module.exports.createForm = function(req, res){
    res.render('transfer/create', {
        csrfToken: req.csrfToken()
    });
}

module.exports.createPost = (req, res) => {
    var data = {
        id: shortid.generate(),
        accountId: req.body.accountId,  
        amount: parseInt(req.body.amount),
        userId: req.signedCookies.userId
    };
    db.get('transfers').push(data).write();
    //var data = db.get('transfer').find({id: accountId}).value();;
    res.redirect('/transfer/create');
}