/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('default', function () {
    console.log('Gulp task is running!')
});

gulp.task('sass', function () {
	return gulp.src('app/scss/**/*.scss')	// Gets all files ending with .scss in app/scss and children dirs
		.pipe(sass())	// using gulp-sass
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({
			stream: true
		}))
});

gulp.task('browserSync', function () {
	browserSync.init({
		server: {
			baseDir: '.'	// should be 'app' but need to fix paths in index.html
		},
	})
});

// run sass and browserSync before watch
// running watch should start sass and browserSync concurrently when
// both are done watch will run
gulp.task('watch', ['browserSync', 'sass'], function () {
	gulp.watch('app/scss/**/*.scss', ['sass']);	// watch app/scss and run sass task
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/**/*.js', browserSync.reload);
});

