  // this file isnt transpiled so must use CommonJS and ES5

  // register babel to transpile before our tests run with Mocha
  require("babel-register")();

  // disable webpack features that mocha doesnt understand
  // whenever it sees a css file, it can treat it like an empty function.
  //  add this to make css, jpgs objects seem empty for webpack stuff
  import requireHacker from 'require-hacker';
  
  const extensions = ['css', 'gif', 'jpg', 'svg'];

  extensions.forEach(type => {
    requireHacker.hook(type, () => 'module.exports = ""');
  })


 // require.extensions('.css') = function() {};
