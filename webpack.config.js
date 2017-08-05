const path = require('path');

const exclude = /node_modules/;

const paths = {
    components: path.resolve(__dirname, '/app/client/components')
};

module.exports = {
    devtool: 'source-map',
    entry: './app/client/main.jsx',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'app/public')
    },
    resolve: {
        alias: {
            components: paths.components
        },
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.js|\.jsx$/,
                exclude: exclude,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'es2015', 'react']
                    }
                }
            },
            {
                test: /\.html$/,
                exclude: exclude,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]'
                    }
                }
            }
        ]
    }
}
