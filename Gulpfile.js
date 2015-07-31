var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-ruby-sass'),
    wiredep = require('wiredep').stream;

gulp.task('css', function () {
  return sass('src/css')
        .pipe(minifycss())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('js', function() {
  return gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('bower', function () {
  gulp.src('src/index.html')
    .pipe(wiredep({
      optional: 'configuration',
      goes: 'here'
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch',function(){
    gulp.watch('src/css/*.scss', ['css']);
    gulp.watch('src/js/*.js', ['js']);
    gulp.watch('src/*.html', ['bower']);
});

gulp.task('default',['css','js','bower','watch']);