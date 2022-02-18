const RGBLed = require("RGBLed");
let LED;

function connect(config, initState) {
  LED = RGBLed.connect([config.R, config.G, config.B], initState);
}

function toggle() {
  LED.toggle();
}

function on() {
  LED.on();
}

function off() {
  LED.off();
}

function getState() {
  return LED.getState();
}

function setState(state) {
  if (state) {
    LED.on();
  } else {
    LED.off();
  }
}

function setColor(color) {
  LED.setColor(color);
}

module.exports = {
  setColor:setColor,
  getState:getState,
  off:off,
  on:on,
  toggle:toggle,
  connect:connect,
  setState:setState,
};
