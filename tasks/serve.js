
var gulp = require('gulp'),
	runSequence = require('run-sequence');

module.exports = function () {

	gulp.task('serve', function() {
		runSequence(
			['browserify', 'sass', 'connect', 'watch', 'open']
		);
	});

};
