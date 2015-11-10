
var gulp = require('gulp'),
	uglify = require('gulp-uglify');

module.exports = function () {

	gulp.task('minify', function() {
		return gulp.src('src/pavel.js')
			.pipe(uglify())
			.pipe(gulp.dest('min'));
	});

};
