module.exports = function(grunt) {
	'use strict';

	grunt.initConfig({
		less: {
			compile: {
        files: {
          'assets/css/style.css': ['assets/less/style.less']
        }
      }
		},
		clean: {
			files: ['assets/css/style.css']
		},
		watch: {
			css: {
				files: ['assets/less/*.less'],
				tasks: ['clean', 'less:compile'],
				options: {
					livereload: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-less');

	grunt.registerTask('default', ['clean', 'less']);
	grunt.registerTask('w', ['watch']);

};