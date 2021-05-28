var gulp = require('gulp');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');

//src path
var js_src = "./assets/js/*.js";
var css_src = "./css/style.css";


//dest path
var js_dist = "./js/";
var js_dist_name = "script.js";

var css_dist = "./css/";
var css_dist_name = "style-minified.css";

gulp.task('scripts', function(){
    return gulp.src(js_src)
            .pipe(plumber())
            .pipe(uglify())
            .pipe(concat(js_dist_name))
            .pipe(gulp.dest(js_dist));
});

gulp.task('minify-css', function () {
    return gulp.src(css_src)
            .pipe(cleanCSS())
            .pipe(gulp.dest(css_dist));
})

gulp.task('watch', function(){
    gulp.watch([js_src], gulp.series('scripts'));
});