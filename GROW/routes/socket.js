
var com = require("serialport");
var gerador= com.SerialPort;
var serialPort = new gerador("/dev/cu.usbserial-A900F4PE", {
  baudrate: 9600
  ,    parser: com.parsers.readline('\r\n')
},true);

serialPort.open(function () {
  console.log('Port OPEN');



});


// var serialport = require("serialport");
// var SerialPort = serialport.SerialPort; 
// var sp = new SerialPort("/dev/ttyUSB2", {
//   baudrate: 9600,
//      parser: serialport.parsers.readline('\r\n')
// }, false); // this is the openImmediately flag [default is true]

// var SerialPort = require("serialport").SerialPort
// var serialPort = new SerialPort("/dev/tty-usbserial1", {
//   baudrate: 57600
// });

// var arduino = require('duino'),
//     board, sensor;

// board = new arduino.Board({
//   debug: true
// });

// sensor = new arduino.Sensor({
//   board: board,
//   pin: 'A0'
// });

// sensor.on('read', function(err, value) {
//  // value = +value;
//   // |value| is the raw sensor output
//   console.log( value );
// });






Modelensaio     = require('../models/ensaio.js');
// Ensaio = mongoose.model('Ensaio', ensaio);
// Keep track of which names are used so that there are no duplicates
var userNames = (function () {
  var names = {};

  var claim = function (name) {
    if (!name || names[name]) {
      return false;
    } else {
      names[name] = true;
      return true;
    }
  };

  // find the lowest unused "guest" name and claim it
  var getGuestName = function () {
    var name,
    nextUserId = 1;

    do {
      name = 'Guest ' + nextUserId;
      nextUserId += 1;
    } while (!claim(name));

    return name;
  };

  // serialize claimed names as an array
  var get = function () {
    var res = [];
    for (user in names) {
      res.push(user);
    }

    return res;
  };

  var free = function (name) {
    if (names[name]) {
      delete names[name];
    }
  };

  return {
    claim: claim,
    free: free,
    get: get,
    getGuestName: getGuestName
  };
}());


// export function for listening to the socket


module.exports = function (socket) {






//sp.open(function () {
//  console.log('open');
//  sp.on('data', function(data) {
   // recebido=JSON.parse(data);
   // socket.emit('receber', {
 //   val_x:recebido.valor
  //val_x:10
    //users: userNames.get()
 // });

  //  console.log('data received: ' + data);
//  });
  /*sp.write("ls\n", function(err, results) {
    console.log('err ' + err);
    console.log('results ' + results);
  });*/  
//});

serialPort.on('data', function(data) 
{

  var pecas=data.split(':');
  
  var leitura={ "pin":pecas[0], "val_x":pecas[1] };
  console.log(leitura.val_x);
  

  socket.emit('receber',leitura);


});





var name = userNames.getGuestName();

socket.emit('quem', {
  estado: "a espera"
    //users: userNames.get()
  });

// (function()
//    {
//     var limite=50;
//       setInterval(function() {
//          socket.emit('receber', {
//     val_x: Math.floor((Math.random()*limite)+1)
//     //users: userNames.get()
//   });
//       }, 3000 );
//    })();


  // send the new user their name and a list of users
  socket.emit('init', {
    name: name,
    users: userNames.get()
  });

  // notify other clients that a new user has joined
  socket.broadcast.emit('user:join', {
    name: name
  });

  // broadcast a user's message to other users
  socket.on('send:message', function (data) {
    socket.broadcast.emit('send:message', {
      user: name,
      text: data.message
    });
  });

  // validate a user's name change, and broadcast it on success
  socket.on('change:name', function (data, fn) {
    if (userNames.claim(data.name)) {
      var oldName = name;
      userNames.free(oldName);

      name = data.name;
      
      socket.broadcast.emit('change:name', {
        oldName: oldName,
        newName: name
      });

      fn(true);
    } else {
      fn(false);
    }
  });



  socket.on('ligar', function (data, fn) {
    // if (userNames.claim(data.name)) {
    //   var oldName = name;
    //   userNames.free(oldName);

    //   name = data.name;

    //   socket.broadcast.emit('change:name', {
    //     oldName: oldName,
    //     newName: name
    //   });

    //   fn(true);
    // } else {
    //   fn(false);
    // }
    if (data.identifica==="jose")
      fn(true);
    else
      fn(false);
  });


  socket.on('AddEnsaio', function (data, fn) {
   
    var m = new  Modelensaio;
    m.name=data.nome;
    m.probe=data.probe.name;
    m.save( function(err, docs){ 
      if(err){
        fn({ok:false});
        console.log('error');
      }else{
        console.log('no error');
        fn(docs);
        console.dir(docs);
      }  
    });

  });


  // clean up when a user leaves, and broadcast it to other users
  socket.on('disconnect', function () {
    socket.broadcast.emit('user:left', {
      name: name
    });
    userNames.free(name);
  });
};


