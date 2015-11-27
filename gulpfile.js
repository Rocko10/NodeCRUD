var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

gulp.task('sass', function(){
    return sass('./public/stylesheets/styles.scss', {
            style: 'compressed'
        })
        .on('error', sass.logError)
        .pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('watch', function(){
    gulp.watch('./public/stylesheets/styles.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);
