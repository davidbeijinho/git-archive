
function AppCtrl($scope, $http, $location) {

}

function MenuCtrl($scope, $http, $location) {


	$scope.isActive = function(route) {
		return route === $location.path();
	};

}


function EnvironmentCtrl($scope, $http, $location) {

}


function TrialCtrl($scope, $http, $location)
{
	$scope.espaco=", ";
	$scope.kinds =
	[
	{name:'Crop' , id:0 , activo:true },
	{name:'Blooming'  , id:1 , activo:true  },
	{name:'Rooting' , id:2 , activo:true  },
	{name:'Fruit set'   , id:3 , activo:true  }
	];


	$scope.ensaios=[];
	$scope.probes =
	[
	{name:'Probe-1' , id:0 , livre:true },
	{name:'Probe-2'  , id:1 , livre:true  },
	{name:'Probe-3' , id:2 , livre:true  },
	{name:'Probe-4'   , id:3 , livre:true  }
	];

	$scope.criar = function ()
	{
//$scope.probe.livre=false;

angular.forEach($scope.probe, function(value, key){
	value.livre=false;
});


var  ensaio_aux=
{
	name:  $scope.nome,
	probe: $scope.probe,
	kind: $scope.kind,
	plant: $scope.plant
};
$scope.ensaios.push(ensaio_aux);
$scope.nome="";
$scope.descriptive="";
$scope.plant="";
$scope.kind="";
//$scope.ensaioForm.$setPristine();
};


}

function TrialONECtrl($scope, $http, $location ,$routeParams)
{
	$scope.nana=$routeParams.trialId;
	$scope.coiso="OLA";
}


function ProbeCtrl($scope, $http, $location,$routeParams) {
	$scope.nana=$routeParams.probeId;
}

function WateringCtrl($scope, $http, $location) {

}


function ReportsCtrl($scope, $http, $location) {

}


function JournalCtrl($scope, $http, $location) {

}


function DashboardCtrl($scope, $http, $location ,$window ,socket)
{
	$scope.sen01 =[{ x: 0, y: 0 } ];
// $scope.sen02 =[{ x: 0, y: 0 } ];
// $scope.sen03 =[{ x: 0, y: 0 } ];
// $scope.sen04 =[{ x: 0, y: 0 } ];

$scope.graph01 = new Rickshaw.Graph( {
	element: document.querySelector("#sensor01"),
	min:0,
	max:1023,
	renderer: 'line',
	series: [{
		color: 'steelblue',
		data:  $scope.sen01
	}]
});

$scope.graph02 = new Rickshaw.Graph( {
	element: document.querySelector("#sensor02"),
	min:0,
	max:1023,
	renderer: 'line',
	series: [{
		color: 'red',
		data:  $scope.sen01
	}]
});

$scope.graph03 = new Rickshaw.Graph( {
	element: document.querySelector("#sensor03"),
	min:0,
	max:1023,
	renderer: 'area',
	series: [{
		color: 'yellow',
		data:  $scope.sen01
	}]
});

$scope.graph04 = new Rickshaw.Graph( {
	element: document.querySelector("#sensor04"),
	min:0,
	max:1023,
	renderer: 'line',
	series: [{
		color: 'green',
		data:  $scope.sen01
	}]
});




$scope.count=0;
$scope.LIMITE=100;
socket.on('receber', function (data)
{
	$scope.sen01.push({x:$scope.count,y:new Number(data.val_x)});
	$scope.count++;
	while ($scope.sen01.length> $scope.LIMITE)
		$scope.sen01.splice(0, 1);



	$scope.graph01.render();
	$scope.graph02.render();
	$scope.graph03.render();
	$scope.graph04.render();

});


 $scope.$on("$destroy", function(){
       console.log("ADEUS");
       socket.disconect();
    });

}


