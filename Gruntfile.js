module.exports =function(grunt){
  //config
  // Project configuration.
  grunt.initConfig({
    uglify: {
    my_target: {
      files: {
        'public/dist/ugly.js': ['public/dist/built.js']
      }
    }
  }

  });

  // Load the plugin that provides the "concat" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  // grunt.registerTask('default', ['uglify']);
};
