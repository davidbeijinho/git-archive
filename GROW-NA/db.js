var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/GROWDB');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {

  console.log("SERVIDOR CONECTADO BASE DE DADOS");
});

var postSchema = mongoose.Schema({
    title: String
    ,text : String
})


var ensaioSchema = mongoose.Schema({
    titulo: String
    ,dataInicio :{ type: Date, default: Date.now }
    ,dataFinal :{ type: Date, default: Date.now }
    ,finalizado: Boolean
})









var POSTE = mongoose.model('poste', postSchema);