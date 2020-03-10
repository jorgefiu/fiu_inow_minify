const gulp = require('gulp');
const minify = require('gulp-minify');
var babel = require('gulp-babel');



gulp.task('default',gulp.series(compile, compress))


function compress(){
    return gulp.src(['compiled/*.js', 'compiled/*.mjs'])
    .pipe(minify())
    .pipe(gulp.dest('build'))
}

function compile(){
    return gulp.src(['files/*.js', 'files/*.mjs'])
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(gulp.dest('compiled'))
}
