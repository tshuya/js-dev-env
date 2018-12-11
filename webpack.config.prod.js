import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMD5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  devtool: 'source-map',
  //entry: [path.resolve(__dirname, 'src/index')], 

  entry: {
    vendor: path.resolve(__dirname, 'src/vendor'),
    main: path.resolve(__dirname, 'src/index')
  },
  
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  // valid optimization modes {production,development,none}
  mode: 'production',
  plugins: [
      // Hash the files using MD5 so that the bundle names change
      // when the content changes, forcing browser to realize it 
      // needs to reload the cached library (code has changed)
      new WebpackMD5Hash(),

      // Generate an external css file with a hash in the file name.
      new ExtractTextPlugin('[name].[contenthash].css'),

      // Create HTML file that includes reference to bundled
      // javascript, and minifies the html code.
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          useShortDoctype: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true 
        },
        inject: true,
        // properties you define her are injected into the index.html file
        // using the htmlWebpackPlugin.options.varName
        trackJSToken: ' some special number you got from trackjs'
      }),

    // eliminate duplicate packages when generating bundle
    new webpack.optimize.DedupePlugin(),
    // Minify JS
    new webpack.optimize.UglifyJsPlugin(),
    // not sure what this does ...?
    new webpack.LoaderOptionsPlugin({
      debug: false,
      noInfo: true
    })
  ],
  node: {
    fs: 'empty'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader'] },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap')}
    ]
  }
};
