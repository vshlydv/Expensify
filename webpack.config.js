//path is a node module that is used to concat two paths that can be little tricky and depends on whole lot of things like os etc
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// __dirname contains current directory path
//console.log(__dirname)

module.exports = (env) => { 
    const isProduction = env === "production";
    const CSSExtract = new ExtractTextPlugin("styles.css");

    return {
        entry: "./src/app.js",
        output: {
            path: path.join(__dirname, "public"),
            filename: "bundle.js"
        },
        module: {
            rules: [{
                loader: "babel-loader",
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test:/\.s?css$/,
                use: CSSExtract.extract({
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }]
        },
        plugins: [
            CSSExtract
        ],
        devtool: isProduction ? "source-map" : "inline-source-map", //source-map makes budle.js a big file
        devServer: {
            contentBase: path.join(__dirname, "public"), 
            historyApiFallback: true
        }
    };  
};