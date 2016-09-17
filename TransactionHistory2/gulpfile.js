/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var del = require('del');
var typescript = require('gulp-typescript');
var tscConfig = require('./tsconfig.json');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('clean', function () {
	return del('dist/**/*');
});

// TypeScript compile
gulp.task('compile', ['clean'], function () {
	return gulp
		.src('app/**/*.ts')
		.pipe(sourcemaps.init())          // <--- sourcemaps
		.pipe(typescript(tscConfig.compilerOptions))
		.pipe(sourcemaps.write('.'))      // <--- sourcemaps
		.pipe(gulp.dest('dist/app'));
});

gulp.task('sass', function () {
	return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
		.pipe(sass()) // using gulp-sass
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('copy:libs', ['clean'], function () {
	gulp.src([
			'node_modules/core-js/client/shim.min.js',
			'node_modules/zone.js/dist/zone.js',
			'node_modules/reflect-metadata/Reflect.js',
			'node_modules/systemjs/dist/system.src.js',

			'node_modules/jquery/dist/jquery.min.js',

			'node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker.css',
			'node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js',
	])
		.pipe(gulp.dest('dist/lib'));

	return gulp.src([
			'node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.woff',
			'node_modules/bootstrap/dist/js/bootstrap.min.js',
			'node_modules/bootstrap/dist/css/bootstrap.css',

			'node_modules/rxjs/**',

			'node_modules/@angular/**',

			'node_modules/@ng-bootstrap/**'
	], { base: 'node_modules' })
	//], { base: '.' })
		.pipe(gulp.dest('dist/lib'));
});

gulp.task('browserSync', function () {
	browserSync.init({
		server: {
			baseDir: 'dist' // should be 'app' but need to fix paths in index.html
		},
	});
});

// index.html is listed below because it is not in the app folder
gulp.task('copy:assets', ['clean'], function () {
	return gulp.src(['app/**/*', 'index.html', 'systemjs.config.js', '!app/**/*.ts'], { base: './' })		// 'styles.css', 
	  .pipe(gulp.dest('dist'))
});

gulp.task('build', ['compile', 'copy:libs', 'copy:assets']);
gulp.task('default', ['build']);

// run sass and browserSync before watch
// running watch should start sass and browserSync concurrently when
// both are done watch will run
gulp.task('watch', ['browserSync', 'sass'], function () {
	gulp.watch('app/scss/**/*.scss', ['sass']);	// watch app/scss and run sass task
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/**/*.js', browserSync.reload);
});

