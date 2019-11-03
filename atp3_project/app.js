//DECLARATION

var express  	= require('express');

var $ = require("jquery");


/////
var ejs  		= require('ejs');
var bodyParse  	= require('body-parser');
var exSession  	= require('express-session');
var cookieParser= require('cookie-parser');
var facultyhome  	= require('./controllers/faculty/home');
var courses  =   require('./controllers/faculty/courses');
var assignment 		= require('./controllers/faculty/assignment');
// var logout  	= require('./controllers/logout');
var app 		= express();

//CONGIFURATION
app.set('view engine', 'ejs');

//MIDDLEWARE


app.use(bodyParse.urlencoded({extended:false}));
app.use(exSession({secret:"my top secret value", saveUninitialized:true, resave:false}));
app.use(cookieParser());
app.use('/facultyhome', facultyhome);
app.use('/courses', courses);
app.use('/assignment', assignment);
// app.use('/login', login);
// app.use('/logout', logout);
app.use('/assets',express.static('assets'));
app.use(express.static('./public'));

//ROUTING
app.get('/', function(req, res){

});


//SERVER STARTUP
app.listen(3000, function(){
	console.log('server started at 3000...');
});
