module.exports = function(grunt) {

    grunt.initConfig({
        'connect': {
            demo: {
                options: {
                    open: true,
                    keepalive: true
                }
            }
        },
        'gh-pages': {
           options: {
             clone: 'lib/pair-with-me'
           },
           src: [
                'lib/**/*',
                '!lib/pair-with-me/**/*',
                'demo/*', 'src/*', 'index.html'
            ]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-gh-pages');

    grunt.registerTask('deploy', ['gh-pages']);
    grunt.registerTask('server', ['connect']);

};
