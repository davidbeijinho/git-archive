/*  MODULES */
var clients  = [];
var express  = require('express'),
routes   = require('./routes'),
mongoose = require('mongoose').connect('mongodb://localhost/GROWDB'),
db       = mongoose.connection,
//base     = require('./db.js');
http     = require('http'),
path     = require('path'),
app      = express(),
io       = require('socket.io')
socket   = require('./routes/socket.js');


app.set('port', process.env.PORT || 3000);

/*  ALL ENVOIREMENTS */
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('less-middleware')({ src: __dirname + '/public' }));
app.use(express.static(path.join(__dirname, 'public')));

/*  DEV ENVOIREMENT */
if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}


/*  ROUTES */
app.get('/', routes.index);

app.get('/login', routes.index);
app.get('/logout', routes.index);

app.get('/perfil', routes.index);
app.get('/estufas', routes.index);

app.get('/ambiente', routes.index);
app.get('/ensaios', routes.index);
app.get('/rega', routes.index);
app.get('/dashboard', routes.index);
app.get('/reports', routes.index);
app.get('/partials/:name', routes.partials);



/*  START SERVER */
var server = http.createServer(app).listen(app.get('port'), function()
{
	io.listen(server).sockets.on('connection', socket);
	console.log('GROW-LAB a correr na porta : ' + app.get('port'));
});

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  // yay!
  //base.liga(mongoose);
  console.log("CONECTADO A BASE DE DADOS");
});




//var Cat = mongoose.model('Cat', { name: String });

// var Thing = mongoose.model('Thing', schema);

 //var m = new Ensaio;
// m.name = 'Statue of Liberty'
// m.age = 125;
// m.updated = new Date;
// m.binary = new Buffer(0);
// m.living = false;
// m.mixed = {[ any: { thing: 'i want' } ]};
// m.markModified('mixed');
// m._someId = new mongoose.Types.ObjectId;
// m.array.push(1);
// m.ofString.push("strings!");
// m.ofNumber.unshift(1,2,3,4);
// m.ofDate.addToSet(new Date);
// m.ofBuffer.pop();
// m.ofMixed = [1, [], 'three', { four: 5 }];
// m.nested.stuff = 'good';
// m.save(callback);