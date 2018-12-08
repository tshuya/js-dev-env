/* this script generates mock data for local dev environments.
   This way you don't hae to point to an actual api, but still 
   get randomized realistic data with rapid page reloads */

/* eslint-disable no-console */

import jsf from 'json-schema-faker';
import {schema} from './mockDataSchema';
import fs from 'fs';      // node file system module
import chalk from 'chalk';  // colorize your log output

// make teh call to jsf, passing it the schema def, and
// convert the results to a json string
const json = JSON.stringify(jsf(schema));

// store the results in a file called db.json which JSON server
// can serve its results from.
fs.writeFile("./src/api/db.json",json, function (err){
  if (err){
    return console.log(chalk.red(err));
  } else {
    console.log(chalk.green("Mock data generated."));
  }
});
