const express = require('express')
const app = express();

require("./models")

app.listen(process.env.PORT || 5000, () => {
    console.log('The library app is listening on a system defined port or port 5000! http://localhost:5000')
})

app.get('/', (req, res) => {
    res.send('<h1>Comp Sys Dropouts Personal CRM</h1>')
})