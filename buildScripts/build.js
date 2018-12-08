// script the is used to make the production webpack bundle
/* eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

// set an enviroment var to tell Babel and other tools
// what the build type is
process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generated minified bundle for Production. This will take a moment ...'))

webpack(webpackConfig).run((err,stats) => {
  if (err) {  // fatal error, so exit
    console.log(chalk.red(err));
    return 1;
  }
  // code to ensure better output is generated than default
  const jsonStats = stats.toJson();
  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(chalk.red(error)));
  }
  if (jsonStats.hasWarnings){
    console.log(chalk.yellow('Webpack generated the following warnings: '));
    jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
  }

  console.log(`Webpack Stats: ${stats}`);

  // if we got this far the build is complete
  console.log(chalk.green('Your app has been build for prod and was written to /dist'));
  
  return 0;
});

// --- end of script  ---