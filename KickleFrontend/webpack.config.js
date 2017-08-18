const path = require('path');

const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = {
  entry: './source/main.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/javascript/')
  },
  // Currently we need to add '.ts' to the resolve.extensions array. 
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
 
  // Source maps support ('inline-source-map' also works) 
  devtool: 'source-map',
 
  // Add the loader for .ts files. 
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  plugins: [
      new CheckerPlugin()
  ]  
  
  
};