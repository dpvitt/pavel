
var gulp = require('gulp'),
	runSequence = require('run-sequence');

module.exports = function () {

	gulp.task('serve', function() {
		runSequence(
			['minify', 'sass', 'connect', 'watch', 'open']
		);
	});

};
