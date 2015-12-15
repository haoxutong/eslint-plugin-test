var gulp=require('gulp');
var eslint=require('gulp-eslint');
var git=require('gulp-git');
gulp.task('lint_es6',function(){
	return gulp.src('./test/test-es6.js')
			.pipe(eslint())
			.pipe(eslint.format());
});
gulp.task('add', function(){
  return gulp.src('./**/*')
    .pipe(git.add());
});
gulp.task('commit', function(){
  return gulp.src('./**/*')
    .pipe(git.commit('initial commit'));
});

gulp.task('push', function(){
  git.push('origin', 'master', function (err) {
    if (err) throw err;
  });
});