
var watch = require('./tasks/watch.js'),
	connect = require('./tasks/connect.js'),
	serve = require('./tasks/serve.js'),
	open = require('./tasks/open.js');

watch();
connect();
open();
serve();
