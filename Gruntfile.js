module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // Server
    connect: {
      app: {
        options: {
          port: 9000,
          base: 'app',
          keepalive: true
        }
      }
    },
    // Compass to compile SCSS file
    compass: {
      dist: {
        options: {
          config: 'app/config.rb',
          sassDir: 'app/sass',
          cssDir: 'app/stylesheets'
        }
      }
    },
    // Task to watch changes in files
    watch: {
      all: {
        options: {
          livereload: true
        },
        files: ['app/scripts/*.js'],
        tasks: ['jshint']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', []);

};
