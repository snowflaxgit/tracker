var express = require('express')
,routes = require('./routes'),io, count;
var app = module.exports = express.createServer()
var results = [];
var results1 = [];
var cunt = [];
var v1,v2,v3,v4,v5,v6,v7;
// this is starting of js

var a= new Array();
var f=1;
var my=true;
var d1,d2,d3,d4,d5,d6,d7;

var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
a[0]=(day + "/" + month  + "/" + year)
	for(i=1;i<=6;i++)
	{   
	if(day<=1)
	{day = daysInMonth(month,year)+1;
	month = month-1;
	}
	if(month == 1 && day == 1){
		--year;
		month = 13;
	}
		a[i]=goLastDay(day, month, year);
		day=day-1; 
	}
/*for(i=0;i<=6;i++)
{
 document.write(a[i]);
}*/
function daysInMonth(month,year) {
	var dd = new Date(year, month, 0);
	return dd.getDate();
} 
function goLastDay(day, month, year){
	/*instead of going from 1 to zero it goes 1 to 12 when going from jan to dec*/
	if(day == 1){
		--month;
		day = daysInMonth(month,year)+1;
		currentTime.setDate(daysInMonth(month,year)+1);
		alert(day);
	}
	if(month == 1 && day == 1){
		--year;
		month = 13;
	}
	return ((day-1)+'/'+month+'/'+year);
} 


// end of js create 
var localTime;
app.configure(function(){
  app.set('views', __dirname + '/views')
  app.set('view engine', 'jade')
  app.use(express.bodyParser())
  app.use(express.methodOverride())
  app.use(require('stylus').middleware({
            force: false                
          , src: __dirname + '/stylus'
          , dest: __dirname + '/public'
          , compress: true
          , linenos: true
          , debug: false                
        }))
  app.use(app.router)
  app.use(express.static(__dirname + '/public'))
})

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }))
})
app.configure('production', function(){
  app.use(express.errorHandler())
})
// MONGO
var mongo = require('mongodb'),
  Server = mongo.Server,
  Db = mongo.Db,
  BSON = mongo.BSONPure
var server = new Server('localhost', 27017, {auto_reconnect:true, poolSize: 1 }) 
var db = new Db('mytest', server)
db.open(function(err, db){
	if(err) console.log(err)
})
		 io = require('socket.io').listen(app);
 		 count = 0;
io.sockets.on('connection', function(socket) {
    count++;
    io.sockets.emit('count', function() 
	{
	  number:results
		  	  
    });
     setInterval(function()
	 {  	
		console.log(v1);
		 db.collection('datastore', function(err, collection) {
		if(err) console.log(err)
		else collection.find({date:{ $in:[a[0],a[1],a[2],a[3]]}}).toArray(function(err, users1) {
		results =	users1;
			})
			if(err) console.log(err)
		else collection.find({time:{ $in:[4,6,2]}}).toArray(function(err, users2) {
		results1 =	users2;
			})
		 }) 
		
			
			return io.sockets.emit('count',
			{			  number:results,
						 number1:results1
						/*,
					 	  ct:(results[0].counter),
						  d1:(results[0].time) */
						 });
			

			
		}, 1200);  
		return socket.on('disconnect', function() {
/*		  count--;
   		  */
    });
});	
	app.get('/', function(req, res){
	db.collection('datastore', function(err, collection) {
		if(err) console.log(err)
		else collection.find().toArray(function(err, users1) {
		results =	users1; 
			if(err) console.log(err)
			else{
				   res.render('index', { users: users1 })
				}
		})
	})
})
app.get('/users/:id/delete', function(req, res){
	db.collection('datastore', function(err, collection) {
		if(err) console.log(err)
		else collection.remove({ '_id': new BSON.ObjectID(req.params.id) }, {safe:true}, function(err, result) {
			console.log('User deleted', result, req.params.id)
		})
	})
	res.redirect('/')
})
function resultdata(){
		var kt = "";
			for (var i=0; i < results.length; i++){
			kt = String((results[i].ip))
//kt = kt +  String((results[i].ip)+(results[i].country)+(results[i].city)+(results[i].region)+(results[i].time)+(results[i].browser)+(results[i].os)+(results[i].res)+(results[i].urlpath)+(results[i].counter))
			}
		  //return String(kt);
}
			
app.listen(3000);
console.log(localTime);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);