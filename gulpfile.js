var gulp = require('gulp'),
  // plumber = require('gulp-plumber'),
  eslint = require('gulp-eslint'),
  eslintFormatter = require('eslint-friendly-formatter'),
  nodemon = require('gulp-nodemon'),
  webpack = require('webpack-stream'),
  sequence = require('gulp-sequence'),
  scsslint = require('gulp-scss-lint'),
  sass = require('gulp-sass'),
  concat = require('gulp-concat'),
  files = {
    js: ['**/*.js','!node_modules/**', '!build/**']
  };

gulp.task('eslint', function() {
  return gulp.src(files.js)
    .pipe(eslint('.eslintrc'))
    .pipe(eslint.format(eslintFormatter));
});

gulp.task('scsslint', function() {
  return gulp.src('./client/scss/*.scss')
    .pipe(scsslint());
});

gulp.task('sass', function() {
  return gulp.src('./client/scss/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('start', function() {
  nodemon({
    script: 'start.js',
    ext: 'jsx js html scss css', // look for changes in .jsx and .html files
    ignore: ['build/**'],
    tasks: ['build']
  }).on('restart', function() {
    console.log('Restarted app');
  });
});

gulp.task('webpack', function() {
  gulp.src('./client.js')
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest('./build/js'));
});

gulp.task('lint', sequence('eslint', 'scsslint'));

gulp.task('build', sequence('sass', 'webpack'));

gulp.task('default', sequence('build', 'start'));
