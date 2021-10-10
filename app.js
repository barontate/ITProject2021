const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('./models');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Cookies for JWT
const cookieParser = require('cookie-parser');
app.use(cookieParser());

//Users
var users = require('./routes/userRouter');
app.use('/', users);

//React app
var reactPath = "./client/build";
app.use(express.static(reactPath));
app.get('/', (req, res) => {
    res.sendFile(reactPath + "index.html");
})

app.listen(process.env.PORT || 5000, () => {
    console.log('The library app is listening on a system defined port or port 5000! http://localhost:5000')
})