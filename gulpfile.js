var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browser-sync', function(){
    browserSync({
        server: {
            baseDir: './'
        },
        notify: false
    });
})
gulp.task('watch', ['browser-sync'], function () {
    gulp.watch('*.html', browserSync.reload);
    gulp.watch('css/*.css', browserSync.reload);
    gulp.watch('js/*.js', browserSync.reload);
})