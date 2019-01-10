module.exports = function(grunt) {
//
  // Project configuration.
  grunt.initConfig({
    "babel": {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          "dist/app.js": "src/app.js",
          "dist/rectangle.js": "src/rectangle.js"
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-babel');

  // Default task(s).
  grunt.registerTask('default', ['babel']);

};
