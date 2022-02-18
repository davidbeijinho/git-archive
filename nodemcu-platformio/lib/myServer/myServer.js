const HTTP = require("http");
const UTILS = require("myUtils");
const LED = require("myLed");

function doResponse(res, code, data) {
  res.writeHead(code, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS"
  });
  res.write(JSON.stringify(data));
  res.end();
}

function sendOKResponse(res, data) {
  doResponse(res, 200, data);
}

function sendErrorResponse(res, code, message) {
  doResponse(res, code, {
    error: message,
    upTime: UTILS.getUptime(),
    startTime: UTILS.getStartTime(),
  });
}

function notHandled(req, res) {
  console.log("INFO: URL not handled");
  console.log("INFO: URL", req.url);
  console.log("INFO: Method", req.method);
  sendErrorResponse(res, 400, "Url not handled");
}

function mainRouteResponse(res) {
  sendOKResponse(res, {
    upTime: UTILS.getUptime(),
    startTime: UTILS.getStartTime(),
  });
}

function ledResponse(res) {
  sendOKResponse(res, {
    status: LED.getState(),
    upTime: UTILS.getUptime(),
    startTime: UTILS.getStartTime(),
  });
}

function ledPostRoute(data, res) {
  if (typeof data.status === "boolean") {
    LED.setState(data.status);
    ledResponse(res);
  } else {
    console.log("INFO: Invalid data", JSON.stringify(data));
    sendErrorResponse(res, 400, "Invalid Data");
  }
}

function updaterResponse(res) {
  sendOKResponse(res, {
    updater: UPDATER.getState(),
    upTime: UTILS.getUptime(),
    startTime: UTILS.getStartTime(),
  });
}

function updaterPostRoute(data, res) {
  var newConfig = UPDATER.getNewConfig(data);
  console.log("INFO: new config", newConfig);
  if (UPDATER.isConfigValid(newConfig)) {
    UPDATER.setUpdater(newConfig, updaterResponse, res);
  } else {
    console.log("INFO: Invalid updater config", data);
    sendErrorResponse(res, 400, "Invalid updater config");
  }
}

function sensorResponse(res) {
  SENSOR.getSensorData(function onData(err, data) {
    if (err) {
      sendErrorResponse(res, 400, err);
    } else {
      sendOKResponse(res, {
        pressure: data.pressure,
        temperature: data.temperature,
        altitude: data.altitude,
        upTime: UTILS.getUptime(),
        startTime: UTILS.getStartTime()
      });
    }
  });
}

function sensorPostRoute(res) {
  sendOKResponse(res, {
    bmp: SENSOR.isConected(),
    upTime: UTILS>getUptime(),
    startTime: UTILS.getStartTime()
  });
}

function getPostData(req, res, callback) {
  var data = "";
  req.on("data", function onData(d) {
    data += d;
  });
  req.on("end", function onEnd() {
    var parsedData = JSON.parse(data);
    callback(parsedData, res);
  });
}

function mainRoutesHandler(req, res) {
  if (req.method === "GET") {
    console.log("INFO: Main page");
    mainRouteResponse(res);
  } else {
    notHandled(req, res);
  }
}

function ledRoutesHandler(req, res) {
  if (req.method === "GET") {
    console.log("INFO: Get status of the LED");
    ledResponse(res);
  } else if (req.method === "POST") {
    console.log("INFO: LED Post route");
    getPostData(req, res, ledPostRoute);
  } else {
    notHandled(req, res);
  }
}

function updaterRoutesHandler(req, res) {
  if (req.method === "GET") {
    console.log("INFO: Get updater information");
    updaterResponse(res);
  } else if (req.method === "POST") {
    console.log("INFO: Updater config route");
    getPostData(req, res, updaterPostRoute);
  } else {
    notHandled(req, res);
  }
}

function sensorRoutesHandler(req, res) {
  if (req.method === "GET" && req.url === "/sensor") {
    console.log("INFO: Sensor response");
    sensorResponse(res);
  } else if (req.method === "POST" && req.url === "/sensor/connect") {
    console.log("INFO: Try to reconect to the sensor");
    SENSOR.connectToSensor();
    sensorPostRoute(res);
  } else {
    notHandled(req, res);
  }
}

function sendFavicon(req, res) {
  const favicon = "\0\0\x01\0\x01\0\x10\x10\x10\0\x01\0\x04\x00\xf0\0\0\0\x16\0\0\x00\x89PNG\x0d\x0a\x1a\x0a\0\0\0\x0dIHDR\0\0\0\x10\0\0\0\x10\x08\x06\0\0\0\x1f\xf3\xffa\0\0\x00\xb7IDAT8\x8d\xa5S\xc1\x0d\x03!\x0csN\xb7\x91w\xcaP\xde)3\xd1G\x09\x0a\x85\xab\xa8\xea\x0f\x02\x82c\x1b0\x92x\x82\xbb\xb7:\x8f\x08D\x84\xd5\xb5\x1b\x00H\xb6>N\x04uN\x12\x92\x10\x11S\xcd]\x0b\xbf\xa9\xe9\x8a\x00\xa0I\x1a*\x06A\x97\xb7\x90\xd4\x8e$A\x12\xee\xde\xb2vR\x90$\xc8q\xf6\x03\xbc\x15Ldw]\x88zpc\xab*\x8c\x08H\xb2A\x90\x1e\x97\xce\x1bd3\x00\xb8v\x9b\xa7p\xf7\xb6\x10\x9cb\xc9\xe0Wd\x06\x17\x80v\xe2\xfb\x09\x17\x00H\xfa\x8b\xc0\xba\x9c\xe3CU\xf1\xc8@\xd2\x08fW\xf8i3?U\x12\x18z\x16\xf5A\x9ddc_\xee\xbd~e{*z\x01|\xcdnfT\x03\x0an\0\0\0\x00IEND\xaeB`\x82";
  res.writeHead(200, { "Content-Type": "image/x-icon" });
  res.write(favicon);
  res.end();
}

function router(req, res) {
  switch (req.url) {
    case "/favicon.ico":
      sendFavicon(req, res);
      break;
    case "/":
      mainRoutesHandler(req, res);
      break;
    case "/led":
      ledRoutesHandler(req, res);
      break;
    case "/updater":
      updaterRoutesHandler(req, res);
      break;
    case "/sensor":
    case "/sensor/connect":
      sensorRoutesHandler(req, res);
      break;
    default:
      notHandled(req, res);
      break;
  }
}

function createServer(port) {
  HTTP.createServer(router).listen(port);
}

module.exports = {
  createServer:createServer,
};
