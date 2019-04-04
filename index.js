//use dotenv for environment variables
require('dotenv').config();

var express = require('express');
var bodyParse = require('body-parser');
var cookieParser = require('cookie-parser');

var userRoute = require('./routes/users.route');
var authRoute = require('./routes/auth.route');
var authMiddleware = require('./middlewares/auth.middleware');
var productRoute = require('./routes/products.route');
var cartRoute = require('./routes/cart.route');
var sessionMiddleware = require('./middlewares/session.middleware');

var app = express();

app.set('view engine', 'pug');
app.set('views', './views');
const port = 3000;

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: true }));
app.use(cookieParser(process.env.SESSION_SECRET));

app.use(sessionMiddleware);
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index.pug');
});

app.use('/users', authMiddleware.requireAuth, userRoute);
app.use('/auth', authRoute);
app.use('/products', productRoute);
app.use('/cart', cartRoute);
app.listen(port, () => console.log(`Listening to port ${port}`));