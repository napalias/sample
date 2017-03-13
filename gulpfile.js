const gulp = require('gulp');
const watchLess = require('gulp-watch-less');
const less = require('gulp-less');
const imagemin = require('gulp-imagemin');
 
gulp.task('less', () => 
    gulp.src('./style.less')
        .pipe(watchLess('./*.less'))
        .pipe(less())
        .pipe(gulp.dest('.'))
);

gulp.task('images', () =>
    gulp.src('images_oroginal/*')
        .pipe(imagemin())
        .pipe(gulp.dest('images'))
);

gulp.task('default', ['less']);