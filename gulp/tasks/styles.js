var gulp,
    autoprefixer,
    minifycss,
    sourcemaps,
    browserSync,
    config;

gulp         = require('gulp');
browserSync  = require('browser-sync');
sass         = require('gulp-ruby-sass');
autoprefixer = require('gulp-autoprefixer');
minifycss    = require('gulp-minify-css');
sourcemaps   = require('gulp-sourcemaps');
config       = require('../config').styles;

gulp.task('styles', ['clean-styles'], function () {
    return sass(config.src, config.settings)
        .pipe(autoprefixer(config.support))
        .pipe(minifycss())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.dest))
        .pipe(browserSync.reload({stream:true}));
});
