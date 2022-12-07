const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.post('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain')
    res.write('your name:\n')
    console.log(req.body);
    res.end(JSON.stringify(req.body.name))
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
