var path = require('path')
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
    context: __dirname,
    entry: ['babel-polyfill', './assets/src/index'], 
    
    output: {
        path: path.resolve('./assets/public/webpack/'), 
        filename: 'main.js', 
    },
    
    plugins: [
        new BundleTracker({filename: './webpack-stats.json'}), 
        new webpack.ProvidePlugin({ 
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery' 
        })
    ],
    
    module: {
        loaders: [
            {
                test: /\.jsx?$/, 
                exclude: /node_modules/, 
                loader: 'babel-loader', 
                query: {
                    presets: ['react', 'es2015', 'stage-3'], 
                    plugins: ['transform-function-bind']
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', {
                        loader: 'css-loader', 
                        options: {
                            modules: true
                        }
                    }]
            },
            { 
                test: /\.less$/, 
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    'less-loader'
                ]
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.(eot|jpg|png|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'url-loader'
            }
        ]
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx']
    },
    //TODO: remove in production
    // output: {
    //     publicPath: 'http://127.0.0.1:8000'
    // },
    devServer: {
        proxy: {
            '/api/*': {
                target: 'http://localhost:8000'
            }
        },
        historyApiFallback: true

    },
    devtool: 'source-map'
}