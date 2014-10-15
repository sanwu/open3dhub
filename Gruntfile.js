/**
 * Created by yang on 14-10-13.
 */

module.exports = function(grunt){
    grunt.initConfig({
        nodewebkit: {
            options: {
                platforms: ['win','osx'],
                buildDir: './builds' // Where the build version of my node-webkit app is saved
            },
            src: ['./src/**/*'] // Your node-webkit app
        }
    });
    grunt.loadNpmTasks('grunt-node-webkit-builder');

    grunt.registerTask('default', ['nodewebkit']);
};
