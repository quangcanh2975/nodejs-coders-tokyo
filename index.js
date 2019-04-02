var express = require('express');
var bodyParse = require('body-parser');
var cookieParser = require('cookie-parser');

var userRoute = require('./routes/users.route');
var authRoute = require('./routes/auth.route');
var authMiddleware = require('./middlewares/auth.middleware');

var app = express();

app.set('view engine', 'pug');
app.set('views', './views');
const port = 3000;

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: true }));
app.use(cookieParser('dafifwoeifadf'));

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index.pug');
});

app.use('/users', authMiddleware.requireAuth, userRoute);
app.use('/auth', authRoute);

app.listen(port, () => console.log(`Listening to port ${port}`));