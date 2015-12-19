var express = require('express');
var app = express();
var place = require('./place');

// listen url www.example.com/
app.use('/',place);

app.listen(3000);