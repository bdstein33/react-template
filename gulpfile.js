'use strict';

// import gulp from 'gulp';
// import eslint from 'gulp-eslint';
// import eslintFormatter from 'eslint-friendly-formatter';
// import nodemon from 'gulp-nodemon';

var gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  eslint = require('gulp-eslint'),
  eslintFormatter = require('eslint-friendly-formatter'),
  nodemon = require('gulp-nodemon'),
  webpack = require('webpack-stream');
  // livereload = require('gulp-livereload'),

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
    ext: 'jsx html', // look for changes in .jsx and .html files
    tasks: ['eslint', 'webpack']
  }).on('restart', function() {
    console.log('Restarted app');
  });
});

gulp.task('webpack', function() {
  gulp.src('./client/source/js/components/Application.jsx')
    .pipe(plumber())
    .pipe(webpack(require('./webpack.config.js'), null, 
      function() {
        // livereload.changed('./client/dist/bundle.js');
      }
    ))
    .pipe(gulp.dest('./client/dist'));
});

gulp.task('lint', ['eslint']);
gulp.task('default', ['webpack', 'start']);
