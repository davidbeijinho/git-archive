var five = require("johnny-five"),
    board, potentiometer,potao;

board = new five.Board();

board.on("ready", function() {

    // Create a new `potentiometer` hardware instance.
    potentiometer = new five.Sensor({
        pin: "A0",
        freq: 1000
    });
    potao = new five.Sensor({
        pin: "A1",
        freq: 1000
    });

    // Inject the `sensor` hardware into
    // the Repl instance's context;
    // allows direct command line access
    board.repl.inject({
        pot: potentiometer
    });

    board.repl.inject({
        pot: potao
    });


    // "read" get the current reading from the potentiometer
    potentiometer.on("read", function( err, value ) {
        console.log("POTINHO -> " value, this.normalized );
    });

    potao.on("read", function( err, value ) {
        console.log("POTAO -> "+ value );
    });
});


// References
//
// http://arduino.cc/en/Tutorial/AnalogInput
