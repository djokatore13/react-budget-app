const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Pravimo test bazu - dinamicko povezivanje/svicovanje baze sa "dev na produkcijsu"
// Varijabla koja cuva u sebi okruzenje(enviromnet) u kome se trenutno nalazite

// process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// if(process.env.NODE_ENV === 'test') {
//   require('dotenv').config({ path: '.env.test' });
// } else if(process.env.NODE_ENV === 'development') {
//   require('dotenv').config({ path: '.env.development' });
// }

module.exports = (env) => {
  const isProduction = env === 'production';

  return {
    entry: ['babel-polyfill', './src/app.js'],
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'style.css',
      }),
      // new webpack.DefinePlugin({
      //   'proces.env.FIREBASE_API_KEY': JSON.stringify(proces.env.FIREBASE_API_KEY),
      //   'proces.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(proces.env.FIREBASE_AUTH_DOMAIN),
      //   'proces.env.FIREBASE_DATABASE_URL': JSON.stringify(proces.env.FIREBASE_DATABASE_URL),
      //   'proces.env.FIREBASE_PROJECT_ID': JSON.stringify(proces.env.FIREBASE_PROJECT_ID),
      //   'proces.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(proces.env.FIREBASE_STORAGE_BUCKET),
      //   'proces.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(proces.env.FIREBASE_MESSAGING_SENDER_ID),
      //   'proces.env.FIREBASE_APP_ID': JSON.stringify(proces.env.FIREBASE_APP_ID),
      //   'proces.env.FIREBASE_MESUREMENT_ID': JSON.stringify(proces.env.FIREBASE_MESUREMENT_ID),
      // })
    ],
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader, 
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ],
      }]
    },
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    }
  };
};
