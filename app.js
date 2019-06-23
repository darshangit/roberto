const express = require('express')
const app = express()
const port = 3000
var shell = require('shelljs');

app.get('/', (req, res) => res.send('Hello World!'))


app.get('/deployISP', function (req, res) {
    shell.exec('./path_to_ur_file')
    res.send('Got a POST request')

})

app.get('/deployASG', function (req, res) {
    shell.exec('./path_to_ur_file')
    res.send('Got a POST request')
})

app.get('/packageISP', function (req, res) {
    shell.exec('./path_to_ur_file')
    res.send('Got a POST request')
})

app.get('/packageASG', function (req, res) {
    shell.exec('./path_to_ur_file')
    res.send('Got a POST request')
})



app.listen(port, () => console.log(`Listening on port ${port}!`))
