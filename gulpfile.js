const gulp = require('gulp');
const minify = require('gulp-minify');
 


gulp.task('default',gulp.series(compress))


function compress(){
    gulp.src(['files/*.js', 'files/*.mjs'])
    .pipe(minify())
    .pipe(gulp.dest('build'))
}
