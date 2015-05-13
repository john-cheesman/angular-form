var gulp,
    bower,
    concat,
    uglify,
    browserSync,
    config;

gulp        = require('gulp');
bower       = require('main-bower-files');
concat      = require('gulp-concat');
uglify      = require('gulp-uglify');
browserSync = require('browser-sync');
config      = require('../config').scripts;

gulp.task('scripts', ['clean-scripts'], function() {
    var scripts;

    scripts = bower();

    scripts = scripts.concat(config.src);

    return gulp.src(scripts)
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(gulp.dest(config.dest))
        .pipe(browserSync.reload({stream: true}));
});
