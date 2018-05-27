'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp.src('./assets/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/css'));
});

gulp.task('sass:watch', function() {
    gulp.watch('./assets/sass/**/*.scss', ['sass']);
});

gulp.task('watch', function() {

    gulp.start("sass");
    gulp.watch('./assets/sass/**/*.scss', ['sass']).on('change', function() {
        browserSync.reload();
    });
});