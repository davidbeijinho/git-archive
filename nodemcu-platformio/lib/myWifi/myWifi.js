var WIFI = require('Wifi');

function connect (config, callback) {
	WIFI.setHostname(config.hostname, function setHostnameCallback() {
		WIFI.on('connected', function onConnected () {
			console.log('INFO: Wifi connection Event', arguments);
			WIFI.getIP(function getIPCallback () {
				console.log('INFO: Wifi IP', arguments);
			});
			WIFI.getHostname(function getHostnameCallback () {
				console.log('INFO: Wifi get Hostname', arguments);
			});
			WIFI.getDetails(function getDetailsCallback () {
				console.log('INFO: Wifi details', arguments);
			});
			WIFI.stopAP();
			WIFI.save();
		});

		WIFI.connect(config.SSID, config.options, function connectCallback (err) {
			console.log('INFO: Wifi connection callback', arguments);
			if (err) {
				console.log('INFO: Error conecting', err);
				callback(err);
			} else {
				callback();
			}
		});
	});
}

module.exports = {
	connect:connect,
	WIFI:WIFI, // For debug
};