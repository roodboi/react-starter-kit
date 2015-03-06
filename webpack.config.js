var webpack = require('webpack');

module.exports = {  
    entry: [
      'webpack/hot/only-dev-server',
      "./src/js/app/router.js"
    ],
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js?$/, loader: 'babel', exclude: /node_modules/ },
            { test: /\.jsx?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
            { test: /\.css$/, loader: "style!css" },
            { test: /\.less$/, loader: "style-loader!css-loader!less-loader"}
        ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ]

};