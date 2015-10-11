module.exports = {
    entry: "./js/app.js",
    output: {
        path: __dirname ,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.sass/, loader: 'style!css!sass?indentedSyntax' },
            { test: /\.woff2|woff|eot|ttf|svg$/, loader: 'file-loader?name=[name].[ext]'}
        ]
    },
};
