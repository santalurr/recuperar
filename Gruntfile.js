'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            modules: {
                expand: true,
                cwd: 'app/',
                src: ['*.js', 'modules/**/*.js'],
                dest: 'dist/'
            }
        },
        less: {
            options: {
                compress: true
            },
            build: {
                files: {
                    'app/assets/css/main.css': 'app/assets/css/*.less'
                }
            }
        },   
        jshint: {
            files: ['app/modules/**/*.js', 'Gruntfile.js'],
            options: {
                jshintrc: true,
                force: true
            }
        },        
        watch: {
            script: {
                files: ['app/modules/**/*.js', 'app/assets/css/*.less'],
                tasks: ['less', 'jshint'],
                options: {
                    spawn: false
                }
            },
            html: {
                files: ['app/modules/**/*.html'],
                options: {
                    spawn: false
                }
            }
        },
        nodemon: {
            dev: {
                script: 'node_modules/http-server/bin/http-server',
                options: {
                    nodeArgs: ['--debug'],
                    ext: 'js,html',
                }
            }
        },
        concurrent: {
            default: ['nodemon', 'watch'],
            debug: ['nodemon', 'watch'],
            options: {
                logConcurrentOutput: true,
                limit: 10
            }
        }            
    });

    // Load the plugins.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'less', 'concurrent:default']);
};