const express = require('express');
const app = express();
require('./models');

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
    res.sendFile(views + "index.html");
})

app.listen(process.env.PORT || 5000, () => {
    console.log('The library app is listening on a system defined port or port 5000! http://localhost:5000')
})