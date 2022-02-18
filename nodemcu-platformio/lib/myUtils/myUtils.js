const HTTP = require('http');
let START_TIME;

function setStartTime(time) {
  START_TIME = time;
}

function getUptime() {
  return Date.now() - START_TIME;
}

function getStartTime() {
  return START_TIME;
}

function NOOP() {}

function postJSON(postURL, data, callback) {
  const content = JSON.stringify(data);
  const options = url.parse(postURL);
  options.method = "POST";
  options.headers = {
    "Content-Type": "application/json",
    "Content-Length": content.length
  };
  const req = HTTP.request(options, function(res) {
    let d = "";
    res.on("data", function(data) {
      d += data;
    });
    res.on("close", function(data) {
      callback(null, d);
    });
  });
  req.on("error", function(e) {
    callback(e);
  });
  req.end(content);
}

module.exports = {
  NOOP: NOOP,
  setStartTime: setStartTime,
  getUptime: getUptime,
  getStartTime: getStartTime,
  postJSON: postJSON
};
