module.exports = {
	entry: __dirname + '/app/index.js',
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	output: {
		path: __dirname + '/build',
    	filename: 'bundle.js',
    	publicPath: '/'
	}
}