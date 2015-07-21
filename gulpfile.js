var gulp = require('gulp');
var console = require('better-console');
var watch = require('./semantic/tasks/watch');
var build = require('./semantic/tasks/build');

gulp.task('default', function(done) {
	console.log("Run run gulp build and watch tasks to showcase the issue.");
	done();
});

gulp.task('build', build);
gulp.task('watch', watch);
