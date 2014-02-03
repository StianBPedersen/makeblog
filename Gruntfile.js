module.exports = function(grunt) {
	'use strict';

	grunt.initConfig({
		sass: {
			compile: {
        files: {
          'assets/css/style.css': ['assets/scss/style.scss']
        }
      }
		},
		clean: {
			files: ['assets/css/style.css']
		},
		watch: {
			css: {
				files: ['assets/scss/*.scss'],
				tasks: ['clean', 'sass:compile'],
				options: {
					livereload: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.registerTask('default', ['clean', 'sass']);
	grunt.registerTask('w', ['watch']);

};