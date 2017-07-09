var gulp 				= require("gulp"),
		browserSync = require('browser-sync'),
		less				=	require('gulp-less');

gulp.task('server', function () {
	browserSync({
		port: 9000,
		server: {
			baseDir: 'app'
		}
	});
});

gulp.task('watch',['server', 'less'], function () {
	gulp.watch([
		'app/*.html',
		'app/js/**/*.js',
		'app/css/**/*.css']).on('change', browserSync.reload);
	gulp.watch(
		'app/css/*.less', ['less']).on('change', browserSync.reload);
});

gulp.task('less', function(){
	return gulp.src('app/css/*.less')
				.pipe(less())
				.pipe(gulp.dest('app/css/'));
});

gulp.task('default', ['server', 'watch']);
