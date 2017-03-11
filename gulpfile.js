const gulp = require('gulp');
const named = require('vinyl-named');
const webpackStream = require('webpack-stream');
const stylus = require('gulp-stylus');
const gulpif = require('gulp-if');
const plumber = require('gulp-plumber');
const uglify = require('gulp-uglify');
const eslint = require('gulp-eslint');
const webpack = require('webpack');
const autoprefixer = require('gulp-autoprefixer');
const webpackOptions = require('./webpack.options');

/* def: environment */
const dev = process.env.NODE_ENV != 'production';

/** @gulp: default*/
gulp.task('default', ['dist', 'watch']);

/** @gulp: default -> dist */
gulp.task('dist', ['js', 'bootstrapCss', 'assets'], () => {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('dist'));
});

/** @gulp: default -> dist -> js */
gulp.task('js', done => {
    gulp.src('src/js/bootstrap.js')
        .pipe(named())
        .pipe(plumber())
        .pipe(webpackStream(webpackOptions, webpack))
        .pipe(gulpif(!dev, uglify()))
        .pipe(gulp.dest('dist/js'))
        .on('data', function() {
            if (!done.called && dev) {
                done.called = true;
                done();
            }
        });
});

/** @gulp: default -> dist -> bootstrapCss -> stylus */
gulp.task('stylus', () => {
    gulp.src('src/stylus/style.styl')
        .pipe(plumber())
        .pipe(stylus({ compress: !dev }))
        .pipe(autoprefixer({ browsers: [
            '> 5%',
            'last 2 versions'],
            flexbox: true }))
        .pipe(gulp.dest('dist/css'));
});

/** @gulp: default -> dist -> bootstrapCss */
gulp.task('bootstrapCss', ['stylus'], () => {
    gulp.src('src/stylus/bootstrap.min.css')
        .pipe(gulp.dest('dist/css'));
});

/** @gulp: default -> dist -> assets */
gulp.task('assets', () => {
    gulp.src('src/assets/**/*')
        .pipe(gulp.dest('dist/'));
});

/** @gulp: default -> watch */
gulp.task('watch', function() {
    gulp.watch('src/stylus/**/*.styl', ['stylus']);
    gulp.watch('src/js/**/*.vue', ['js']);
});

/** @gulp: test -> dist */
gulp.task('test', ['dist'], function() {
    return gulp.src(['src/**/*.js', 'src/**/*.vue', '!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});