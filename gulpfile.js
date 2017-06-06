const gulp = require('gulp');
//const watchLess = require('gulp-watch-less');
const less = require('gulp-less');
//const imagemin = require('gulp-imagemin');

gulp.task('less', function () {
	gulp.src('./style.less')
		//.pipe(watchLess('./*.less'))
	    .pipe(less())
	    .pipe(gulp.dest('.'))
})

gulp.task('watch', ['less']);
gulp.task('default', ['watch']);