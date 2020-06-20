var dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
console.log(process.env.NODE_ENV);

var app = require('./app');
var port = process.env.PORT;
app.listen(port, () => {
    console.log(`server ${port} up`)
})