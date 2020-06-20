var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');


var usuarioRoute = require('./routes/usuarioRoutes')
var app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({}));


app.use('/usuarios', usuarioRoute);
app.all('*', (req, res, next) => {

})



mongoose.connection.openUri('mongodb://localhost:27017/shangrilaDB', () => {
    console.log('Base de datos up');
})




module.exports = app;