var gulp = require('gulp-help')(require('gulp'));
var console = require('better-console');

gulp.task('default', function(done) {
	console.log("Run run gulp build and watch tasks to showcase the issue.");
	done();
});

gulp.task('init', ['build:semantic']);

gulp.task('build:semantic', function(done) {
	var build = require('./semantic/tasks/build');
	build(done);

	// instead they could even do this:
	//require('./semantic/tasks/build')(done);
});


gulp.task('watch', function(done) {
	// watch some project related files
	// and also semantic ui files
	var watch = require('./semantic/tasks/watch');
	watch();

	// instead they could even do this:
	//require('./semantic/tasks/watch')(done);
});
