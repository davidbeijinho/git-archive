//var Ensaio;
//var myFunc2;
var mongoose = require('mongoose');
//module.exports =
 //exports.liga= function (mongoose) {



// var myFunc2 = function(ensaio)    {
//        var m = new Ensaio;
// 	m.name=ensaio.nome;
// 	m.probe=ensaio.probe.id;
//     };
//exports.Addensaio = myFunc2;
var ensaio = mongoose.Schema({
	name: {type: String , required: true}
	//, data: { type: Date, default: Date.now  , required: true}
	, probe:{ type: String  , required: true}

	//, user : {type: String  , required: true}
	, activo : { type: Boolean, default: true}
});


module.exports  = mongoose.model('Ensaio', ensaio);

// this.Addensaio = function(ensaio)    {
//        var m = new Ensaio;
// 	m.name=ensaio.nome;
// 	m.probe=ensaio.probe.id;
//     }
// var m = new Ensaio;
//  	m.name="teste";
//  	m.probe="tomates";
//  	m.save();
// exports.Addensaio  = function (ensaio){
// var m = new Ensaio;
//  	m.name=ensaio.nome;
//  	m.probe=ensaio.probe.name;
//  	m.save();

// }; 




//};

