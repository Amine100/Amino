var express = require('express');

var app = express();
var bodyParser = require('body-parser');

var companyRouter = require('./routes/company.js');
var busRouter = require('./routes/bus.js');
var locationRouter = require('./routes/location.js');


app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('../public'));
app.use("/company", companyRouter);
app.use("/bus", busRouter);
app.use("/location", locationRouter);



var server = app.listen(30123, function () {
    var port = server.address().port

    console.log("Example app listening at :%s",  port)
})