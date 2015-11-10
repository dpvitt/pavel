
var gulp = require('gulp'),
	open = require('gulp-open');

module.exports = function () {

	gulp.task('open', function(){
		gulp.src(__filename)
			.pipe(open({uri: 'http://localhost:8888'}));
	});

};
