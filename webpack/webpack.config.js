const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var _ = require('underscore');

module.exports = (options) => {
  const ExtractSASS = new ExtractTextPlugin(`/styles/${options.cssFileName}`);

  const webpackConfig = {
    devtool: options.devtool,
    entry: [  
      `webpack-dev-server/client?http://localhost:${+ options.port}`, 
      'webpack/hot/dev-server',
      
      Path.join(__dirname, '../src/index.js'),
    ],
    output: {
      path: Path.join(__dirname, '../dist'),
      filename: `/scripts/${options.jsFileName}`,
    },
    resolve: { 
      extensions: ['', '.js', '.jsx'], 
    },

    module: {
      loaders: [{  
        test: /.jsx?$/,
        include: Path.join(__dirname, '../src'),
        loader: 'babel-loader',
      },
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass'),
        exclude: [Path.resolve('../src')]
        
      },
      
    ],
    },
    plugins: [ 
      new ExtractTextPlugin('ui_toolkit.css'),
      // new ExtractTextPlugin('docs.css'),
      
      new Webpack.ProvidePlugin({
        _: 'underscore',
      }),
      new Webpack.DefinePlugin({ 
        'process.env': {
          NODE_ENV: JSON.stringify(options.isProduction ? 'production' : 'development'),
        },
      }),
      new HtmlWebpackPlugin({ 
        template: Path.join(__dirname, '../src/index.html'),
      }),
    ],
  };

  if (options.isProduction) {
    webpackConfig.entry = [Path.join(__dirname, '../src/index')];

    webpackConfig.plugins.push(
      new Webpack.optimize.OccurenceOrderPlugin(),
      new Webpack.optimize.UglifyJsPlugin({ 
        compressor: {
          warnings: false,
        },
      }),
      ExtractSASS
    );

    webpackConfig.module.loaders.push({
      test: /\.scss$/,
      loader: ExtractSASS.extract(['css', 'sass']),
    });
  } else {
    webpackConfig.plugins.push(
      new Webpack.HotModuleReplacementPlugin() 
    );

    webpackConfig.module.loaders.push({
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass'],
    });
    webpackConfig.devServer = {
      hot: true, 
      port: options.port, 
      inline: true,    
      historyApiFallback: true, 
      stats: 'errors-only',
    };
  }

  return webpackConfig;
};
