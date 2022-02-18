'use strict';

angular.module('milCoimbraApp')
  .controller('MainCtrl', function ($scope) {
    $scope.empresas = [
      {nome:"SOPORCEL PAPEL",volume:[550368013,619146249,83017321],empregados:715},
      {nome:"CELULOSE BEIRA",volume:[351990025,336862225,42679574],empregados:233},
      {nome:"SOPORCE PULP",volume:[251116512,236640517,10314756],empregados:1}
    ];

  $scope.controlo = {
  };


  });
