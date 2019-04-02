module.exports.postCreate = function (req, res, next) {
    var errors = [];
    if (req.body.name == '') {
        errors.push('Name is required');
    }

    if (req.body.phone == '') {
        errors.push('Phone is required');
    }
    console.log(errors);
    if (errors.length) {
        res.render('users/create', {
            errors: errors,
            values: req.body
        });
        return;
    }
    next();
}

module.exports.loginValidation = function (req, res, next) {
    var errors = [];
    if (req.body.email == '') {
        errors.push('Email is required');
    }

    if (req.body.password == '') {
        errors.push('Password is required');
    }
    console.log(errors);
    if (errors.length) {
        res.render('auth/login', {
            errors: errors,
            values: req.body
        });
        return;
    }
    next();
}