module.exports = function (grunt) {
    
    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    './css/main.css': './css/config/config.scss'
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-sass')

    grunt.registerTask('default', ['sass'])
};