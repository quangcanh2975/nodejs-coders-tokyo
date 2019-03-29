var express = require('express');
var bodyParse = require('body-parser');

var userRoute = require('./routes/users.route');
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');
const port = 3000;

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index.pug');
});

app.use('/users', userRoute);
app.listen(port, () => console.log(`Listening to port ${port}`));