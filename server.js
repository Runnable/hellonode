var express = require('express');
var app = express();

app.get('/', function(req, res){
    console.log('hit route -----')
    res.send('_');
});

console.log('started1')
app.listen(80);
