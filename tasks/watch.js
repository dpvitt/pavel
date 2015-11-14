
var gulp = require('gulp'),
	connect = require('gulp-connect');

module.exports = function () {

	gulp.task('html', function() {
		gulp.src(['./examples/*.html'])
			.pipe(connect.reload());
	});

	gulp.task('js', function() {
		gulp.src(['./js/*.js'])
			.pipe(connect.reload());
	});

	gulp.task('watch', function(){
		gulp.watch(['./js/pavel.js', './js/**/*.js'], ['test', 'js']);
		gulp.watch(['./scss/*.scss', './scss/**/*.scss'], ['sass']);
		gulp.watch(['./examples/*.html'], ['html']);
		gulp.watch(['./test/*.js'], ['test']);
	});

};
