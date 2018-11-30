'use strict';

module.exports = {
  build: {
    options: {
      sourcemap: 'none'
    },
    files: [{
      expand: true,
      cwd: 'src/sass/',
      src: ['themes/*.sass'],
      dest: 'dist/chrome/css/',
      ext: '.css'
    }, {
      expand: true,
      cwd: 'src/sass/',
      src: ['themes/*.sass'],
      dest: 'dist/firefox/css/',
      ext: '.css'
    }]
  }
};
