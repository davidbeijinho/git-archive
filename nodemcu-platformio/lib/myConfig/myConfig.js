var SECRETS = require('mySecrets');

module.exports = {
  IR_PIN: NodeMCU.D3,
  BPM_PINS: {
    scl: NodeMCU.D2,
    sda: NodeMCU.D1,
  },
  BMP_MODE: 0,
  LED_PINS: {
    R: NodeMCU.D7,
    G: NodeMCU.D6,
    B: NodeMCU.D5
  },
  LED_INIT: false,
  WIFI: {
    hostname: "ESPRUINO",
    SSID: "CiudadVieja",
    options: {
      password: SECRETS.password, // - Password string to be used to access the network.
      // dnsServers: "", // (array of String) - An array of up to two DNS servers in dotted decimal format string.
      // channel: "", // - Wifi channel of the access point (integer, typ 0..14, 0 means any channel), only on ESP8266.
      // bssid: "" // - Mac address of the access point (string, type "00:00:00:00:00:00"), only on ESP8266.
    }
  },
  colors: {
    red: "FF0000",
    blue: "00AAFF",
    green: "00FF00",
    yellow: "FFFF00",
    bluish: "00FFFF",
    purple: "FF00FF",
  },
  PORT: 5000,
  //POST_IR_URL: 'http://raspberrypi.local/api/infrared'
  POST_IR_URL: 'http://192.168.0.255/api/infrared',
};
