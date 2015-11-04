
var watch = require('./tasks/watch.js'),
	connect = require('./tasks/connect.js'),
	serve = require('./tasks/serve.js');

watch();
connect();
serve();
