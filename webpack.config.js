const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "main.js",
        publicPath: '/',
    },
    devtool: "inline-source-map",
    devServer: {
        static: {
            directory: path.join(__dirname, "public")
        },
        compress: true,
        port: 9000,
        hot: true
    },
    module: {
        rules: [
            {
                // sass
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.html$/i,
                loader: "html-loader"
            }
        ]
    }
};
