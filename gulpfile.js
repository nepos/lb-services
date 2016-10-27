/* global require */
var gulp = require('gulp');
var exec = require('child_process').exec;
var runSequence = require('run-sequence');
var brancher = require('gulp-brancher')(gulp, 'package.json');

// Pull the lb services
gulp.task('pull-lbservices', function(callback) {
	exec('git pull', function(err, stdout, stderr) {
		if(err || stderr) {
			callback(err || stderr);
			return;
		}
		callback(null, true);
	});
});

gulp.task('update-lbservices', function(callback) {
	runSequence('pull-lbservices', 'bump-version', 'add', 'commit', callback);
});