const express = require('express')
const app = express();

require("./models")


const port = 3000;

app.listen(port, () => {
    console.log('The library app is listening on port 3000! http://localhost:3000')
})

app.get('/', (req, res) => {
    res.send('<h1>Comp Sys Dropouts Personal CRM</h1>')
})