var path = require('path');
var paths = require('./paths');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');


module.exports = {
		  devtool: 'eval',
		  entry: [
	         require.resolve('webpack-dev-server/client') + '?/',
		     require.resolve('webpack/hot/dev-server'),
		     path.join(paths.appSrc, 'index')
		    
		 ],
		  output: {
		    filename: 'bundle.js',
		    path: path.resolve(__dirname, 'dist')
		  },
		  module: {
			  rules: [
				  {
					  test: /\.js$/,
				      exclude: /(node_modules|bower_components)/,
				      use: {
				        loader: 'babel-loader',
				        options: {
				          presets: [[
				        	  "env" , {
				        	      "targets": {
				        	          "browsers": ["last 2 versions"]
				        	        }
				        	      }
				        	  ]],
				        	plugins: [
				        		[ "transform-react-jsx" ]
				        	]
				        }
				      } 		  	
				  }			  
			  ]			   
		  },
		  plugins: [
			    new HtmlWebpackPlugin({
			      inject: true,
			      template: paths.appHtml,
			      favicon: paths.appFavicon,
			    }),
			    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"development"' }),
			    // Note: only CSS is currently hot reloaded
			    new webpack.HotModuleReplacementPlugin(),
			    new CaseSensitivePathsPlugin()
			  ]
		};
		