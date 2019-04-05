var db = require('../db');
module.exports.addToCart = function(req, res){
    var productId = req.params.productId;
    var sessionId = req.signedCookies.sessionId;
    if(!sessionId){
        res.redirect('/products');
        return;    
    }
    var count = db.get('session').find({id: sessionId}).get('cart.'+productId, 0).value();
    db.get('session').find({id: sessionId}).set('cart.' + productId, count + 1).write();
    // count number of products in cart
    var total = 0 ;
    var cart = db.get('session').find({id: sessionId}).get('cart').value();
    for(var element in cart){
        total += cart[element];
    }
    res.redirect('/products');
}