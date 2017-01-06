module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            modules: {
                expand: true,
                cwd: 'app/',
                src: ['*.js', 'modules/**/**/*.js'],
                dest: 'dist/'
            }
        },
        less: {
            options: {
                compress: true
            },
            build: {
                files: {
                    'app/static/css/main.css': 'app/modules/**/styles/*.less'
                }
            }
        },        
    });

    // Load the plugins.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'less']);
};