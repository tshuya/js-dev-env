// var express = require('express');
// var path = require('path');
// var open = require('open');
// var port = 3000;
// var app = express();

import express from 'express';
import path from 'path';
import open from 'open';

import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo:true,
  publicPath: config.output.publicPath
}));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
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