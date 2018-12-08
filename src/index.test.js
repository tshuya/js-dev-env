  // load a named assertion library
  import {expect} from 'chai';

  import jsdom from 'jsdom';
  import fs from 'fs';

  // simple test
  describe('Our first test', () => {
    it('should pass', () => {
      expect(true).to.equal(true);
    });
  });

// read the index.html file to memory
// get a handle to the page window object
// find the first h1 tag, then run a test on it's contents

 describe('index.html', () => {
  it('should say hello', (done) => {
    const index = fs.readFileSync('./src/index.html',"utf-8"); 
    jsdom.env(index, function(err, window) {     
       const h1 = window.document.getElementsByTagName('h1')[0];  
       expect(h1.innerHTML).to.equal("Hello World!");
       window.close();   // free up memory
       done();
    });
  });

});

// ------------- section added for api call test ----

describe('index.html', () => {
  it('should have h1 that says Users', (done) => {
    const index = fs.readFileSync('./src/index.html',"utf-8"); 
    jsdom.env(index, function(err, window) {     
       const h1 = window.document.getElementsByTagName('h1')[0];  
       expect(h1.innerHTML).to.equal("Users");
       window.close();   // free up memory
       done();
    });
  });
});