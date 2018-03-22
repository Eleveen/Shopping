module.exports = require('./webpack.config.js')({
    isProduction: false,
    devtool: 'cheap-eval-source-map',  // build效率较高，调试比较方便
    jsFileName: 'app.js',
    cssFileName: 'app.css',
    port: 3000,
  });
  