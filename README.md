# js-dev-env
boilerplate javascript dev environment based on Cory House's presentation.

This project will set up a dev environment that uses Babel to 
transpile ES6 JS code down to earlier versions to support older browsers.
Execute ESLINT on source code after saves to look for code issues.
Automated testing using mocha with the chia library
Supports ability to demo your test site externally via localtunnel 

Generate production builds using webpack along with optimization of resulting bundled dist.
  minification of the source
  generate sourcemaps for debugging purposes
  utilize cache busting to reduce page load to only load cached libaries if the code in them has changed.
  bundle splitting to reduce size of individual page loads
  dynamic HTML rendering using embeddedjs and webpack
     (so production and dev enviornments can have different options)



