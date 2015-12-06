var gulp = require('gulp'),
  // plumber = require('gulp-plumber'),
  eslint = require('gulp-eslint'),
  eslintFormatter = require('eslint-friendly-formatter'),
  nodemon = require('gulp-nodemon'),
  webpack = require('webpack-stream');
  sequence = require('gulp-sequence')

var files = {
  js: 'server.js'
};

gulp.task('eslint', function() {
  return gulp.src(files.js)
    .pipe(eslint('.eslintrc'))
    .pipe(eslint.format(eslintFormatter));
});

gulp.task('start', function() {
  nodemon({
    script: 'start.js',
    ext: 'jsx js html', // look for changes in .jsx and .html files
    tasks: ['eslint']
  }).on('restart', function() {
    console.log('Restarted app');
  });
});

gulp.task('webpack', function() {
  gulp.src('./client.js')
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest('./build/js'));
});

gulp.task('lint', ['eslint']);

gulp.task('default', sequence('lint', 'webpack', 'start'));
