const path = require('path');
const webpack = require('webpack');  /* from the root package */ // eslint-disable-line
const pkg = require('../../package.json');

module.exports = {
  entry: {
    app: ['./src/index.js'],
  },

  output: {
    filename: '[name].js',
    path: path.resolve(process.cwd(), '../storyboard-listener-ws-server/lib/public'),
    publicPath: '/',
  },

  resolve: {
    // Add automatically the following extensions to required modules
    extensions: ['', '.js'],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.TEST_BROWSER': JSON.stringify(false),
      'process.env.STORYBOARD_VERSION': JSON.stringify(pkg.version),
    }),
  ],

  // devtool: if process.env.NODE_ENV isnt 'production' then 'eval'

  module: {
    loaders: [
      {
        test: /\.coffee$/,
        loader: 'babel!coffee',
      },
      {
        test: /\.js$/,
        exclude: path.resolve(process.cwd(), 'node_modules'),
        loader: 'babel',
      },
      {
        test: /\.(otf|eot|svg|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file',
      },
      {
        test: /\.css$/,
        loader: 'style!css',
      },
      {
        test: /\.sass$/,
        loader: 'style!css!sass?indentedSyntax',
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
    ],
  },
};
