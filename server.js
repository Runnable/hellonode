var express = require('express');
var app = express();

app.get('/', function(req, res){
    console.log('hit route -----')
    res.send('hello khanton');
});

console.log('started')
app.listen(3000);
