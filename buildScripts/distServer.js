// distServer file - used to run sample prod dist

import express from 'express'; // web server
import path from 'path';
import open from 'open';
import compression from 'compression'; // gzip compression

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// allow console statements in this script
/* eslint-disable no-console  */ 

// pretend this is your production web server address
app.get('/users',function(req,res) {
  // hard coding for simplicity, pretend this hits a real database
  res.json([
    {"id": 1,"firstname":"Bob","lastname":"Smith","email":"bob@gmail.com"},
    {"id": 2,"firstname":"Tammy","lastname":"Norton","email":"tnorton@gmail.com"},
    {"id": 3,"firstname":"Tina","lastname":"Lee","email":"tina.lee@gmail.com"}   
  ]);
});

app.listen(port, function(err) {
  if (err) {
    console.log (err);
  } else {
  open('http://localhost:' + port);
  }
});