var gulp   = require('gulp');
var del    = require('del');
var config = require('../config').clean;

gulp.task('clean-scripts', function() {
    del(config.scripts);
});

gulp.task('clean-styles', function() {
    del(config.styles);
});

gulp.task('clean-pages', function() {
    del(config.pages);
});

gulp.task('clean', [
    'clean-scripts',
    'clean-styles',
    'clean-pages'
]);
