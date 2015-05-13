var gulp,
    browserSync,
    config;

gulp        = require('gulp');
browserSync = require('browser-sync');
config      = require('../config').pages;

gulp.task('pages', ['clean-pages'], function() {
    return gulp.src(config.src)
        .pipe(gulp.dest(config.dest))
        .pipe(browserSync.reload({stream: true}));
});
