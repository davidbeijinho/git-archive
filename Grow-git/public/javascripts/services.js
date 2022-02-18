'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
app.factory('socket', ['$rootScope', function ($rootScope, $timeout) {

    var socket = io.connect();

    return {
      on: function (eventName, callback) {
        socket.on(eventName, function () {
        console.log(eventName);  
          var args = arguments;
          $rootScope.$apply(function () {
            callback.apply(socket, args);
          });
        });
      },
      emit: function (eventName, data, callback) {
        socket.emit(eventName, data, function () {
          var args = arguments;
          $rootScope.$apply(function () {
            if (callback) {
              callback.apply(socket, args);
            }
          });
        })
      },
      disconnect: function () {
       // $timeout(socket.disconnect, 0, false);
         socket.disconnect();
      },
      socket: socket
    };

  }]);