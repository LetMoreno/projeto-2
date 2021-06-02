const gulp = require('gulp');
const plumber = require('gulp-plumber');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const convert_webp = require('gulp-webp');
const imagemin = require('gulp-imagemin');

const sources = {
    js: "./assets/js/*.js",
    css: "./css/style.css",
    img: "./assets/images/*",
    minified: './assets/minified-images/*'
};

const dest = {
    js: "./js/",
    css: "./css/",
    webp: "./assets/webp-images/",
    minified: './assets/minified-images/'
};

gulp.task('scripts', function(){
    return gulp.src(sources.js)
            .pipe(plumber())
            .pipe(uglify())
            .pipe(concat('script.js'))
            .pipe(gulp.dest(dest.js));
});

gulp.task('minify-css', function () {
    return gulp.src(sources.css)
            .pipe(cleanCSS())
            .pipe(gulp.dest(dest.css));
});

gulp.task('webp', function () {
    return gulp.src(sources.minified)
            .pipe(convert_webp())
            .pipe(gulp.dest(dest.webp));
});

gulp.task('imagemin', function () {
    return gulp.src(sources.img)
            .pipe(imagemin())
            .pipe(gulp.dest(dest.minified));
});

gulp.task('watch', function(){
    gulp.watch([sources.js], gulp.series('scripts'));
});