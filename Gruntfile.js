'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        // Metadata stored in magic.json
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>*/\n',
        // Task configuration.
        replace: {
            production: {
                src: ['public/css/src/main.css'],
                dest: 'public/css/src/main.css',
                replacements: [{
                    from: '../fonts/quicksand.css',
                    to: 'http://fonts.googleapis.com/css?family=Quicksand:300,400,700'
                }]
            },
            dev: {
                src: ['public/css/src/main.css'],
                dest: 'public/css/src/main.css',
                replacements: [{
                    from: 'http://fonts.googleapis.com/css?family=Quicksand:300,400,700',
                    to: '../fonts/quicksand.css'
                }]
            }
        },

        useminPrepare: {
            'options': {
                'root': 'public',
                'dest': 'public',
                'staging': 'public/.tmp'
            },
            'html': 'public/index.html'
        },

        copy: {
            production: {
                src: 'public/index.html',
                dest: 'public/index-dev.html'
            },
            dev: {
                src: 'public/index-dev.html',
                dest: 'public/index.html'
            }
        },

        clean: {
            production: ["public/js/dist/*", "public/css/dist/*"],
            dev: ["public/js/dist/*", "public/css/dist/*", 'public/index-dev.html']
        },
        usemin: {
            html: 'public/index.html'
        },
        less: {
            'default': {
                files: {
                    "public/css/src/main.css": "public/css/src/main.less"
                }
            }
        },
        watch: {
            'default': {
                files: ['public/css/src/*.less'],
                tasks: ['less']
            }
        },
        concat: {
            fontify: {
                options: {
                    // Replace all 'use strict' statements in the code with a single one at the top
                    process: function(src, filepath) {
                        return "@import 'http://fonts.googleapis.com/css?family=Quicksand:300,400,700';" + src;
                    },
                },
                files: {
                    'public/css/dist/style.css': ['public/css/dist/style.css'],
                },
            }
        },
        smushit: {
            'default': {
                src: ['public/img/*.png', 'public/img/*.jpg','!public/img/*glyphicon*.png'],
                dest: 'public/img/min'
            }
        }
        /*htmlcompressor: {
            compile: {
                files: {
                    '<%= pkg.dest %>/magic.html': '<%= pkg.dest %>/magic.html'
                },
                options: {
                    type: 'html',
                    preserveServerScript: true,
                    compressJs: true
                }
            }
        }*/


    });

    // modules to be installed, run "npm install <TaskName>", e.g npm install grunt-closure-compiler
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-smushit');

    grunt.registerTask('production', [
        'copy:production',
        'clean:production',
        'less',
        // replace is a custom task to support web fonts in production and local fonts in dev
        'replace:production',
        'useminPrepare',
        'concat',
        'uglify',
        'cssmin',
        'usemin',
        'concat:fontify',

    ]);

    grunt.registerTask('dev', [
        'copy:dev',
        'clean:dev',
        'replace:dev'
    ]);
}