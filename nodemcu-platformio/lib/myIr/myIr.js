const IRReceiver = require("IRReceiver");
const UTILS = require("myUtils");
const CONFIG = require("myConfig");
const lastCall = 0;
// KY-022
// S	    SIGNAL
// middle	+5V
// -	    GND

// const commands = {
//   MINUS: {
//     code: "10000000011111111111000000001111111",
//     cbs: []
//   },
//   PLUS: {
//     code: "10000000011111111101010000101011111",
//     cbs: []
//   },
//   ONE: {
//     code: "10000000011111111001100001100111111",
//     cbs: []
//   },
//   TWO: {
//     code: "10000000011111111000110001110011111",
//     cbs: []
//   },
//   THREE: {
//     code: "10000000011111111011110101000010111",
//     cbs: []
//   },
//   ZERO: {
//     code: "10000000011111111011010001001011111",
//     cbs: []
//   }
// };

function setFunction(key, func) {
  return commands[key].cbs.push(func);
}

function removeFunction(key, id) {
  commands[key].cbs[id] = UTILS.NOOP;
}

function irCallback(code) {
  const diff = Date.now() - lastCall;
  if (diff > 500 || lastCall == 0) {
    UTILS.postJSON(CONFIG.POST_IR_URL, { code: code }, function(error, data) {
      if (error) {
        console.log("SEND IR CODE ERROR: ", error);
      } else {
        console.log("SEND IR CODE Response: ", data);
      }
      lastCall = Date.now();
    });
  }

  // let valid = false;
  // Object.keys(commands).forEach(function(value, index, arr) {
  //   if (arr[index].code === code) {
  //     console.log("IR CODE: ->", value);
  //     valid = true;
  //     arr[index].cbs.forEach(function(cb) {
  //       cb();
  //     });
  //   }
  // });

  // if (!valid) {
  //   console.log("OTHER COMMAND");
  //   console.log(code);
  // }

  // if (code === commands.MINUS) {
  //   console.log("MINUS COMMAND");
  //   LED_STATUS = LED_STATUS - 1;
  //   if (LED_STATUS < 0) {
  //     LED_STATUS = 0;
  //   }
  //   setColor();
  // } else if (code === commands.PLUS) {
  //   console.log("PLUS COMMAND");
  //   LED_STATUS = LED_STATUS + 1;
  //   if (LED_STATUS > TOTAL_STATUS) {
  //     LED_STATUS = TOTAL_STATUS;
  //   }
  //   setColor();
  // } else if (code === commands.ONE) {
  //   console.log("ONE COMMAND");
  //   logCycle = !logCycle;
  // } else if (code === commands.TWO) {
  //   console.log("TWO COMMAND");
  // } else if (code === commands.THREE) {
  //   console.log("THREE COMMAND");
  // } else if (code === commands.ZERO) {
  //   console.log("ZERO COMMAND");
  //   LED.toggle();
  // } else {
  //   console.log("OTHER COMMAND");
  //   console.log(code);
  // }
}

function connect(irPin) {
  IRReceiver.connect(irPin, irCallback);
}

module.exports = {
  connect: connect,
  setFunction: setFunction,
  removeFunction: removeFunction,
};
