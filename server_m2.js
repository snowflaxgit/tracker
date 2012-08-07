var express = require('express')
,routes = require('./routes'),io, count;
var app = module.exports = express.createServer()
var results = [];
var cunt = [];
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
	  number:resultdata()
	  cont1:resultdata_cont()
	  city:resultdata_cit()
	  reg:resultdata_reg()
	  time1:resultdata_time()
  		brow:resultdata_brow()
		os1:resultdata_os()
		res:resultdata_res()
		path:resultdata_path()
		count:resultdata_cnt()
	  ct : (results[0].counter)
	  
    });
	
     setInterval(function()
	 {
		 db.collection('datastore', function(err, collection) {
		if(err) console.log(err)
		else collection.find().toArray(function(err, users1) {
		results =	users1; 
			
		})
		 }) 
			return io.sockets.emit('count',
			{
						   number:results,
						   cont1:resultdata_cont(),
						   city:resultdata_cit(),
						   reg:resultdata_reg(),
						   time1:resultdata_time(),
							brow:resultdata_brow(),
							os1:resultdata_os(),
							res:resultdata_res(),
							path:resultdata_path(),
							count:resultdata_cnt(),
						 ct : (results[0].counter)
			});
		}, 6200);  
		return socket.on('disconnect', function() {
		  count--;
			return io.sockets.emit('count', 
		{
			number:resultdata(),
			cont1:resultdata_cont(),
			city:resultdata_cit(),
			reg:resultdata_reg(),
			time1:resultdata_time(),
			brow:resultdata_brow(),
			os1:resultdata_os(),
			res:resultdata_res(),
			path:resultdata_path(),
			count:resultdata_cnt(),
			ct : (results[0].counter)
   		 });
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
			function resultdata_cont(){
										var cont = "";
										for (var i=0; i < results.length; i++){
											cont = String(results[i].country)
											cunt[i] = cont;
										}
										 return String(cunt);
				}
			function resultdata_cit(){
										var cit = "";
										for (var i=0; i < results.length; i++){
											cit = String(results[i].city)
										}
										 return String(cit);
				}
			function resultdata_reg(){
										var reg = "";
										for (var i=0; i < results.length; i++){
											reg = String(results[i].region)
										}
										 return String(reg);
				}
			function resultdata_time(){
										var t = "";
										for (var i=0; i < results.length; i++){
											t = String(results[i].time)
										}
										 return String(t);
				} 
			function resultdata_brow(){
										var b = "";
										for (var i=0; i < results.length; i++){
											b = String(results[i].browser)
										}
										 return String(b);
				} 
			function resultdata_os(){
										var os = "";
										for (var i=0; i < results.length; i++){
											os = String(results[i].os)
										}
										 return String(os);
				} 
			function resultdata_res(){
										var r = "";
										for (var i=0; i < results.length; i++){
											r = String(results[i].res)
										}
										 return String(r);
				}
			function resultdata_path(){
										var p = "";
										for (var i=0; i < results.length; i++){
											p = String(results[i].urlpath)
										}
										 return String(p);
				}
			function resultdata_cnt(){
										var cc = "";
										for (var i=0; i < results.length; i++){
											cc = String(results[i].counter) 											 
										}
										 return String(cc);
				}
app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);