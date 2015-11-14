
var gulp = require('gulp'),
	browserify = require('gulp-browserify'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat');

module.exports = function () {

	gulp.task('browserify', function() {

		gulp.src(['js/pavel.js'])
			.pipe(browserify({
				standalone: 'pavel',
	    		insertGlobals: true,
	    		debug: true
	  		}))
	  		.pipe(concat('pavel.bundle.js'))
	  		.pipe(uglify())
	  		.pipe(gulp.dest('./js'));
	});

};
