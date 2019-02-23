const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = env => {
    return {
        entry: './src/index.js',
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'dist')
        },
        resolve: {
            // see below for an explanation
            mainFields: ['svelte', 'browser', 'module', 'main']
        },
        module: {
            rules: [
                {
                    test: /\.(html|svelte)$/,
                    include: [
                        path.resolve(__dirname, "src/components")
                    ],
                    exclude: /node_modules/,
                    use: 'svelte-loader'
                },
                {
                    test: /\.html$/,
                    exclude: /components/,
                    use: [
                        {
                            loader: "html-loader",
                            options: {minimize: true}
                        }
                    ]
                }
            ]
        },
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
            port: 9000
        },
        plugins: [
            new Dotenv({
                path: `./${env.mode}.env`,
                systemvars: true,
            }),
            new HtmlWebPackPlugin({
                template: "./src/index.html",
                filename: "./index.html"
            }),
        ]
    }
};
