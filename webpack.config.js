const path = require("path")

const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require("copy-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCssAssetPlugin = require("optimize-css-assets-webpack-plugin")
const TerserWebpackPlugin = require("terser-webpack-plugin")

const isDev = process.env.NODE_ENV === 'development'
const isProd = process.env.NODE_ENV === 'production'

const plugins = () => {
    const pluginsList = [
        new HTMLWebpackPlugin({
            template: "./index.html",
            title: "TS_Framework",
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src/assets/favicon.webp"),
                    to: path.resolve(__dirname, "dist")
                },
            ]
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css"
        })
    ]
    return pluginsList
}

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: "all"
        }
    }
    if (isProd) {
        config.minimizer = [
            new OptimizeCssAssetPlugin(),
            new TerserWebpackPlugin()
        ]
    }
    return config
}

const cssLoaders = (extra) => {
    const loaders = [{
        loader: MiniCssExtractPlugin.loader,
    }, 'css-loader']
    if (extra) loaders.push(extra)
    return loaders
}

const babelOptions = (preset) => {
    const opts = {
        presets: ['@babel/preset-env'],
        plugins: [
            ['@babel/plugin-proposal-class-properties']
        ]
    }
    if (preset) {
        opts.presets.push(preset)
    }
    return opts
}

const rules = () => {
    const rulesList = [
        {
            test: /\.css$/,
            use: cssLoaders()
        },
        {
            test: /\.(png|jpg|svg|gif)$/,
            use: ['file-loader']
        },
        {
            test: /\.(ttf|woff|woff2|eot)$/,
            use: ['file-loader']
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: babelOptions()
            },
        },
        {
            test: /\.ts$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: babelOptions("@babel/preset-typescript")
            },
        }
    ]
    return rulesList
}

module.exports = {
    context: path.resolve(__dirname, "src"),
    mode: "development",
    entry: {
        main: ['@babel/polyfill', './index.ts'],
        second: './second.ts'
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist")
    },
    resolve: {
        extensions: ['.js', '.ts'],
        alias: {
            "@": path.resolve(__dirname, "src")
        }
    },
    devServer: {
        open: true,
        port: 4200,
        hot: isDev,
        // quiet: true, // Выключает все логи вебпака
        onListening: function (server) {
            const port = server.listeningApp.address().port;
            console.log('Listening on port:', port);
        }
    },
    devtool: isDev ? 'source-map' : '',
    optimization: optimization(),
    plugins: plugins(),
    module: {
        rules: rules()
    }
}