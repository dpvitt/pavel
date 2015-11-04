
var gulp = require('gulp'),
	connect = require('gulp-connect');

module.exports = function () {

	gulp.task('html', function() {
		gulp.src(['./examples/*.html'])
			.pipe(connect.reload());
	});

	gulp.task('js', function() {
		gulp.src(['./src/*.js'])
			.pipe(connect.reload());
	});

	gulp.task('watch', function(){
		gulp.watch(['./examples/*.html'], ['html']);
		gulp.watch(['./src/*.js'], ['js']);
	});

};
