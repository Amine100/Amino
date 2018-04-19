var express = require('express');
var session = require('express-session');

var userRouter = require('./Routes/user.js');
var testSessionRouter = require('./Routes/testSession.js');

var app = express();
var bodyParser = require('body-parser');
app.use(session({
    secret: 'soft dev',
    resave: true,
    saveUninitialized: false
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.all('/welcome.html', function(req,res, next){
    console.log("checking welcome");
    if (req.session && req.session.check){
        next();
    }
    res.redirect('/login.html');
})

app.use(express.static('./public'));


app.use("/user", userRouter);
app.use("/testSession", testSessionRouter);


var server = app.listen(3023, function () {
var port = server.address().port

    console.log("Example app listening at :%s", port)
})