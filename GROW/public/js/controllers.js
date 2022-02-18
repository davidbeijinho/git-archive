'use strict';

/* Controllers */
function MenuCtrl($scope, $http, $location, socket) {
 $scope.dadoss =[{ x: 0, y: 0 } ];
  //=[ 
  //           { x: 0, y: 40 }, 
  //           { x: 1, y: 49 }, 
  //           { x: 2, y: 38 }, 
  //           { x: 3, y: 30 }, 
  //           { x: 4, y: 32 } ];
var user={};
//user.username="jose";
$scope.user=user;
//$scope.logado=true;
  $scope.ensaios = [ ];
  $scope.probes = [
  {name:'Probe-1' , id:0 , livre:true },
  {name:'Probe-2'  , id:1 , livre:true  },
  {name:'Probe-3' , id:2 , livre:true  },
  {name:'Probe-4'   , id:3 , livre:true  }
  ];
  $scope.messages = [];

  $scope.users ;
  //$scope.user ="";
  $scope.name="";
  $scope.socket=socket;
  $scope.coiso="eu venho do menu";
  $scope.isActive = function(route) {
   return route === $location.path();
 }
}
function AppCtrl($scope, $http, $location) {

  $scope.estado="desligado";
  $scope.conectado=false;
  /* Socket listeners*/


  $scope.socket.on('quem', function (data) {
    $scope.estado = data.estado;
    $scope.users = data.users;

  });

  $scope.socket.on('init', function (data) {
    $scope.name = data.name;
    $scope.users = data.users;
  });



  $scope.socket.on('send:message', function (message) {
    $scope.messages.push(message);
  });

  $scope.socket.on('change:name', function (data) {
    changeName(data.oldName, data.newName);
  });

  $scope.socket.on('user:join', function (data) {
    $scope.messages.push({
      user: 'chatroom',
      text: 'User ' + data.name + ' has joined.'
    });
    $scope.users.push(data.name);
  });

  /* add a message to the conversation when a user disconnects or leaves the room*/
  $scope.socket.on('user:left', function (data) {
    $scope.messages.push({
      user: 'chatroom',
      text: 'User ' + data.name + ' has left.'
    });
    var i, user;
    for (i = 0; i < $scope.users.length; i++) {
      user = $scope.users[i];
      if (user === data.name) {
        $scope.users.splice(i, 1);
        break;
      }
    }
  });

  /* Private helpers*/


  var changeName = function (oldName, newName) {
    /* rename user in list of users*/
    var i;
    for (i = 0; i < $scope.users.length; i++) {
      if ($scope.users[i] === oldName) {
        $scope.users[i] = newName;
      }
    }

    $scope.messages.push({
      user: 'chatroom',
      text: 'User ' + oldName + ' is now known as ' + newName + '.'
    });
  }


  $scope.ligar = function () {
    $scope.socket.emit('ligar', {
      identifica: $scope.identifica
    }, function (result) {
      if (!result) {
        alert('Nao foi possivel Identificar');
      } else {


        $scope.estado="Ligado";
        $scope.conectado=true;
      }
    });
  };


  /* Methods published to the scope*/


  $scope.changeName = function () {
    $scope.socket.emit('change:name', {
      name: $scope.newName
    }, function (result) {
      if (!result) {
        alert('There was an error changing your name');
      } else {

        changeName($scope.name, $scope.newName);

        $scope.name = $scope.newName;
        $scope.newName = '';
      }
    });
  };



  $scope.sendMessage = function () {
    $scope.socket.emit('send:message', {
      message: $scope.message
    });

    /* add the message to our model locally*/
    $scope.messages.push({
      user: $scope.name,
      text: $scope.message
    });

    /* clear message box*/
    $scope.message = '';
  };
}


function AmbienteCtrl($scope, $http, $location) {

}
function EnsaiosCtrl($scope, $http, $location) {
  //$scope.user="josei";



  $scope.criar = function () 
  {
    console.log($scope.probe);
    var  ensaio_aux={
     nome:  $scope.nome
     ,probe: $scope.probe
     ,user: $scope.user.username
   };
   $scope.socket.emit('AddEnsaio', ensaio_aux, function (result) 
   {
    if (!result) {
      alert('Nao foi possivel Criar ensaio');
    } else {
      $scope.nome="";

      $scope.ensaios.push(result);
      $scope.probes[$scope.probe.id].livre=false;
      console.log(result);
       // $location.path('/ensaio/result.id');
     //   $location.path('/ensaio/'+result.vai);
   }
 });

 };

}

function RegaCtrl($scope, $http, $location) {

}

function DashboardCtrl($scope, $http, $location) {








 //var chart = d3.select("#chart");






  $scope.count=0;
  $scope.LIMITE=100;
  $scope.socket.on('receber', function (data) {
   $scope.dadoss.push({x:$scope.count,y:new Number(data.val_x)});
   $scope.count++;
   while ($scope.dadoss.length> $scope.LIMITE)
    $scope.dadoss.splice(0, 1);
  //$scope.$watch( $scope.dadoss.length, function(newValue, oldValue) {

   // console.log("ola");
 //   if ($scope.dadoss.length>=1)
     $scope.graph.render();

 //},true);
});

  $scope.graph = new Rickshaw.Graph( {
    element: document.querySelector("#chart"), 
    width: 500, 
    height: 400, 
     renderer: 'line',
    series: [{
      color: 'steelblue',
      data:  $scope.dadoss
      
    }]
  });
 //$scope.axes = new Rickshaw.Graph.Axis.Time( { graph:  $scope.graph } );

// $scope.y_axis = new Rickshaw.Graph.Axis.Y( {
//         graph: $scope.graph,
//         orientation: 'left',
//         tickFormat: Rickshaw.Fixtures.Number.formatKMBT,
//         element: document.getElementById('y_axis'),
// } );
 
 //$scope.x_axis = new Rickshaw.Graph.Axis.Time( { graph:  $scope.graph } );

//$scope.graph.render();
//$scope.$watch( $scope.dadoss.length, function(newValue, oldValue) {
  //alert("oiii");
  //console.log("ola");
 // $scope.graph.render();
     //scope.greeting = scope.salutation + ' ' + scope.name + '!';
  // },true); // initialize the watch

$scope.desenha = function () {
  //$scope.graph.render();
};

$scope.addTodo = function () {
  $scope.coisa ={};
  $scope.coisa.x=new Number($scope.val_x);
  $scope.coisa.y=new Number($scope.val_y);
  $scope.dadoss.push($scope.coisa);
  $scope.val_x = '';
  $scope.val_y = '';
    //$scope.$digest();
   // $scope.$watch( $scope.dadoss.length, function(newValue, oldValue) {
  //alert("oiii");
 // console.log("ola");
 // $scope.graph.render();
     //scope.greeting = scope.salutation + ' ' + scope.name + '!';
 //  },true);
  };
}

// app.controller('MenuCtrl', function($scope, $location) {
//   $scope.isActive = function(route) {
//     return route === $location.path();
//   }
// });

function ReportsCtrl($scope, $http, $location) {

/* $scope.form = {};
 $scope.submitPost = function () {
   $http.post('/api/post', $scope.form).
     success(function(data) {
       $location.path('/');
     });
};*/
}

function LoginCtrl($scope, $http, $location) {



  $scope.entrar = function () 
  {
  if ( ($scope.Iusername=="grow")&&($scope.Ipassword=="123123") )
  {
   $scope.user.logado=true;
   $scope.user.username=$scope.Iusername;
   $location.path('/');  
  }
  else
  {
     $scope.erroLog=true;
     $scope.erroLogin="Problemas ao fazer login";
  }
  
   };


/* $scope.form = {};
 $scope.submitPost = function () {
   $http.post('/api/post', $scope.form).
     success(function(data) {
       $location.path('/');
     });
};*/
}
function LogoutCtrl($scope, $http, $location) {
$scope.user.logado=false;
  $location.path('/');
/* $scope.form = {};
 $scope.submitPost = function () {
   $http.post('/api/post', $scope.form).
     success(function(data) {
     
     });
};*/
}


function PerfilCtrl($scope, $http, $location) {

/* $scope.form = {};
 $scope.submitPost = function () {
   $http.post('/api/post', $scope.form).
     success(function(data) {
     
     });
};*/
}

function EstufasCtrl($scope, $http, $location) {

/* $scope.form = {};
 $scope.submitPost = function () {
   $http.post('/api/post', $scope.form).
     success(function(data) {
     
     });
};*/
}