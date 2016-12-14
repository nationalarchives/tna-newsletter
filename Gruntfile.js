module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: {
                sourcemap: 'none'
            },
            dist: {
                files: {
                    'css/newsletter-sass.css': 'css/sass/newsletter-sass.scss'
                }
            }
        },
        cssmin: {
            options: {
                sourceMap: true
            },
            target: {
                files: {
                    'css/newsletter-sass.css.min': ['css/newsletter-sass.css']
                }
            }
        },
        watch: {
            scripts: {
                files: 'js/*.js',
                tasks: ['concat', 'uglify']
            },
            css: {
                files: 'css/sass/*.scss',
                tasks: ['sass', 'cssmin']
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['js/scripts.js'],
                dest: 'js/compiled/tna-newsletter.js'
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'js/compiled/tna-newsletter.min.js': ['js/compiled/tna-newsletter.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['sass', 'cssmin', 'concat', 'uglify','watch']);

};