const express = require('express')
const app = express();
const http = require('http');
require("./models")

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, () => {
    console.log('The library app is listening on port 3000!')
})

app.get('/', (req, res) => {
    res.send('<h1>Comp Sys Dropouts Personal CRM</h1>')
})