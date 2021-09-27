const express = require('express')
const app = express();

require("./models")

var users = require('./routes/userRouter');
const views ='./views/';
app.use('/', users);
app.use(express.static(views));


app.listen(process.env.PORT || 5000, () => {
    console.log('The library app is listening on a system defined port or port 5000! http://localhost:5000')
})

app.get('/', (req, res) => {
    res.sendFile(views + "index.html");
})
