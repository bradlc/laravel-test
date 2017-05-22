var express = require('express')
var request = require('request')
var app = express()
var h = require('preact').h;
var render = require('preact-render-to-string');

app.get('/', function (req, res) {
  request('http://localhost:8080', function (error, response, body) {
    var data = JSON.parse(body);
    var cities = []
    for (var item in data) {
      cities.push(data[item].Name)
    }

    var City = function City(_ref) {
      var name = _ref.name;
      return h(
        "div",
        { "class": "city" },
        h(
          "strong",
          null,
          name
        )
      );
    };

    var cityDivs = cities.map(function (name, i) {
      return h(City, { name: name });
    });

    var html = render(h(
      "div",
      null,
      cityDivs
    ));

    res.send('<!doctype html>' + html)
  });
})

app.listen(3000)
