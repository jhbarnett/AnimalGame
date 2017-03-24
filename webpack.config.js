var path = require('path')
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
    context: __dirname,
    entry: ['babel-polyfill', './assets/js/index'], 
    
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
                    presets: ['react', 'es2015', 'stage-3'] 
                }
            },
            {
                test: /\.css$/,
                use: 'style-loader!css-loader'
            },
            { 
                test: /\.less$/, use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.png$/,
                use: 'url-loader?limit=100000'
            },
            {
                test: /\.jpg$/,
                use: 'file-loader'
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
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
            }
        ]
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx']
    },

    devServer: {
        proxy: {
            '/api/*': {
            target: 'http://localhost:8000'
            }
        }
    }
};
