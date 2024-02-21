module.exports = function(grunt) {
    grunt.initConfig({
      less: {
        development: {
          files: {
            "dist/styles/main.css": "src/styles/main.less"
          }
        }
      },
      uglify: {
        options: {
          mangle: false
        },
        my_target: {
          files: {
            'dist/scripts/main.min.js': ['src/scripts/*.js']
          }
        }
      },
      exec: {
        createBranch: 'git checkout -b exercicio_grunt'
      },
      gitadd: {
        task: {
          options: {
            force: true
          },
          files: {
            src: ['Gruntfile.js']
          }
        }
      },
      gitcommit: {
        your_target: {
          options: {
            message: 'Adicionando Gruntfile.js'
          },
          files: {
            src: ['Gruntfile.js']
          }
        }
      },
      gitpush: {
        your_target: {
          options: {
            remote: 'origin',
            branch: 'exercicio_grunt'
          }
        }
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-git');
  
    grunt.registerTask('default', ['less', 'uglify']);
    grunt.registerTask('createBranch', ['exec:createBranch']);
    grunt.registerTask('addAndCommit', ['gitadd', 'gitcommit']);
    grunt.registerTask('pushToBranch', ['gitpush']);
    grunt.registerTask('deploy', ['createBranch', 'addAndCommit', 'pushToBranch']);
  };
  