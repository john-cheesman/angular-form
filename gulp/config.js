var dest,
    src;

dest = './dist';
src  = './src';

module.exports = {
    clean: {
        scripts: dest + '/js/**/*.js',
        styles: dest + '/css/**/*.css',
        pages: dest + '/**/*.html'
    },
    serve: {
        server: {
            baseDir: dest
        }
    },
    scripts: {
        src: [
            src + '/js/app.js',
            src + '/js/**/module.*.js',
            src + '/js/**/factory.*.js',
            src + '/js/**/controller.*.js',
            src + '/js/**/*.js'
        ],
        dest: dest + '/js'
    },
    styles: {
        src: src + '/sass/**/*.scss',
        dest: dest + '/css',
        settings: {
            sourcemap: true
        },
        support: {
            browsers: ['last 2 versions']
        }
    },
    pages: {
        src: src + '/pages/**/*.html',
        dest: dest
    }
};
