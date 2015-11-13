
var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename');

module.exports = function () {

	gulp.task('minify', function() {
		gulp.src('js/pavel.js')
			.pipe(uglify())
			.pipe(rename({
				extname: '.min.js'
			}))
			.pipe(gulp.dest('js'));
	});

};