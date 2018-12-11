// this file contains references to the vendor libraries
// we are using in this project.  This is used by webpack
// in the prod build only.  A separate bundle for vendor is
// useful since it is unlikely to change as often as our app code.
// All the libraries we reference will be written to vendor.js.
// Any files not referenced will be bundled into main.js.

/* eslint-disable no-unused-vars */
// need above line because fetch var is never used below.

import fetch from 'whatwg-fetch';
// others you might include here are ... angular, react, bootstrap, jquery, ...
