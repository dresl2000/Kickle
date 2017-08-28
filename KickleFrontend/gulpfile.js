var gulp  = require('gulp'),
	sass   = require('gulp-sass');
    gutil = require('gulp-util'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	noop = require('gulp-noop'),
	sourcemaps = require('gulp-sourcemaps'),
	ts = require('gulp-typescript');



gulp.task('default', ['watch']);



gulp.task('build-css', function() {
return gulp.src('source/**/*.scss')
    .pipe(sourcemaps.init())  // Process the original sources
      .pipe(sass({
          outputStyle: 'compressed',
          includePaths: ['node_modules/susy/sass']
      }).on('error', sass.logError))	 
	  .pipe(concat('main.css'))
    .pipe(sourcemaps.write()) // Add the map to modified source.	
    .pipe(gulp.dest('public/css'));
});




gulp.task('copyHtml', function() {  
  gulp.src('source/**/*.html').pipe(gulp.dest('public'));
});

gulp.task('copyFonts', function() {  
  gulp.src('source/fonts/**').pipe(gulp.dest('public/fonts'));
});

gulp.task('copyImages', function() {  
  gulp.src('source/images/**').pipe(gulp.dest('public/images'));
});

gulp.task('compile-ts', function () {
    return gulp.src('source/**/*.ts')
        .pipe(ts({
            noImplicitAny: true,
            out: 'bundle.js'
        }))
        .pipe(gulp.dest('public/javascript'));
});

gulp.task('copyJavaScriptLibs', function() {  
  gulp.src(	['node_modules/angular/angular.min.js',
			'node_modules/angular-route/angular-route.min.js']
			).pipe(gulp.dest('public/javascript'));
});

gulp.task('watch', function() {
  gulp.watch('source/**/*.ts', ['compile-ts']);
  gulp.watch('source/**/*.scss', ['build-css']);
  gulp.watch('source/**/*.html', ['copyHtml']);
});

gulp.task('build', function() {
  gulp.start('build-css');
  gulp.start('copyHtml');
  gulp.start('copyFonts');
  gulp.start('copyImages');
  //gulp.start('copyJavaScriptLibs');
  //gulp.start('compile-ts');
});


