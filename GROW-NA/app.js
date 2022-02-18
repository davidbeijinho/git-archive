/* MODULOS */

var express = require('express')
, routes = require('./routes')
, api = require('./routes/api')
, http = require('http')
, dados = require('./db.js')
//, arduino = require('./arduino.js')
, path = require('path');

var app = express();

/* CONFIGS */

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('view options', {
  layout: false
});
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('less-middleware')({
  dest: __dirname + '/public/stylesheets',
  src: __dirname + '/public/less',
  prefix: '/stylesheets',
  compress: true
}));
app.use(express.static(path.join(__dirname, 'public')));

if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

/* Routes */

app.get('/', routes.index);
app.get('/partials/:name', routes.partials);
app.get('/ambiente', routes.index);
app.get('/ensaios', routes.index);
app.get('/rega', routes.index);
app.get('/dashboard', routes.index);
app.get('/reports', routes.index);
app.get('/addPost', routes.index);
app.get('/readPost/:num', routes.index);
app.get('/editPost/:num', routes.index);

/* JSON API */

app.get('/api/posts', api.posts);
app.get('/api/post/:id', api.post);
app.post('/api/post', api.addPost);
app.put('/api/post/:id', api.editPost);
app.delete('/api/post/:id', api.deletePost);

/* redirect all others to the index (HTML5 history) */
/* app.get('*', routes.index); */

/* Start server */

http.createServer(app).listen(app.get('port'), function(){
  console.log('GROW-SERVER a correr na porta ' + app.get('port'));
});