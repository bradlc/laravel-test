var express = require('express')
var request = require('request')
var app = express()

app.get('/node', function (req, res) {
  request('http://localhost', function (error, response, body) {
    var data = JSON.parse(body);
    var html = ''
    for (var item in data) {
      html = html + data[item].Name + '<br>'
    }
    res.send(html)
  });
})

app.listen(3000)
