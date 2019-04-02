var db = require('../db'); // không cần thay đổi path vì require trong routes
module.exports.lists = function (req, res) {
    var page, perPage, start, end, maxPage;
    page = parseInt(req.query.page) || 1;
    perPage = 9;
    start = (page - 1)*perPage;
    end = page * perPage;
    var products = db.get('products').value();
    maxPage = Math.ceil(products.length / perPage);
    
    var pages = [];

    if(page >= maxPage ){
        pages = [maxPage - 2, maxPage - 1, maxPage]
        
    }
    else if (page > 1 ){
        pages = [page - 1, page, page + 1]
    }
    else {
        pages = [page, page + 1, page + 2]
    }
    res.render('products', {
        products: products.slice(start, end),
        pages: pages,
        currentPage: page
    });
}