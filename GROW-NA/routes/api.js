var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/GROWDB');
var modelo; 
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () 
{
  console.log("CONECTADO BASE DE DADOS");
  modelo = mongoose.model('poste'); 
});

exports.posts = function (req, res) 
{
  var query = modelo.find()
  query.exec(function (err, docs) 
  {
    res.json({posts : docs });
  });

};

exports.post = function (req, res) 
{
  modelo.findById(req.params.id).exec(function (err, doc) 
  {
    if (err)
    {
      res.json(false);
      console.warn("ERRO AO VISUALIZAR "+err);
    }
    else
    {
      res.json({post: doc});
    }
  });

};

exports.addPost = function (req, res) 
{
  var poste = new modelo({ title: req.body.title ,  text: req.body.text});
  poste.save(function (err, fluffy) 
  {
    if (err) 
    {
      console.error("ERRO ADICIONA POST "+err);
    }
    else
    {
      console.log("Adicionado OK");
    }
    res.json(req.body);
  });
};



exports.editPost = function (req, res) 
{
  var id = req.params.id;
  modelo.findById(id).exec(function (err, doc) 
  {
    if (err)
    {
      res.json(false);
      console.warn("ERRO AO EDITAR "+err);
    }
    else
    {
      doc.title=req.body.title;
      doc.text=req.body.text;
      doc.save(function (err) 
      {
        if(err) 
        {
          console.error('ERRO GRAVAO EDIÇAO '+err);
          res.json(false);
        }
        else
        {
          res.json(true);
        }
      });
    }
  });
};

exports.deletePost = function (req, res) 
{
  var id = req.params.id;
  modelo.remove({ _id: id }, function(err) 
  {
    if (err) 
    {
      console.error("ERRO AO APAGAR "+err);
      res.json(false);
    }
    else 
    {
      res.json(true);
    }
  });
};