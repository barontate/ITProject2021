const express = require('express')
const app = express();

require("./models")

//Users
var users = require('./routes/userRouter');
app.use('/', users);
app.use(express.static('./pages/loginpage'));
app.use(express.static('./pages/signuppage'));


app.set('view engine', 'html');
app.set('views', './pages');
app.engine('html', require('ejs').renderFile);
app.listen(process.env.PORT || 5000, () => {
    console.log('The library app is listening on a system defined port or port 5000! http://localhost:5000')
})

app.get('/', (req, res) => {
    res.send('<h1>Comp Sys Dropouts Personal CRM</h1>')
})

app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
<<<<<<< Updated upstream
}); 
=======
}); 
>>>>>>> Stashed changes
