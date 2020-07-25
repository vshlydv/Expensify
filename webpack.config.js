//path is a node module that is used to concat two paths that can be little tricky and depends on whole lot of things like os etc
const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// __dirname contains current directory path
//console.log(__dirname)

process.env.NODE_ENV = process.env.NODE_ENV || "development";

if(process.env.NODE_ENV === "test") {

}
else {
    if(process.env.NODE_ENV === "development")
        require("dotevn").config({ path: ".env.development" });
}

module.exports = (env) => { 
    const isProduction = env === "production";
    const CSSExtract = new ExtractTextPlugin("styles.css");

    return {
        entry: "./src/app.js",
        output: {
            path: path.join(__dirname, "public", "dist"),
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
            CSSExtract,
            new webpack.DefinePlugin( {
                "process.env.FIREBASE_API_KEY": JSON.stringify(process.env.FIREBASE_API_KEY),
                "process.env.FIREBASE_AUTH_DOMAIN": JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                "process.env.FIREBASE_DATABASE_URL": JSON.stringify(process.env.FIREBASE_DATABASE_URL),
                "process.env.FIREBASE_PROJECT_ID": JSON.stringify(process.env.FIREBASE_PROJECT_ID),
                "process.env.FIREBASE_STORAGE_BUCKET": JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
                "process.env.FIREBASE_MESSAGING_SENDER_ID": JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
                "process.env.FIREBASE_APP_ID": JSON.stringify(process.env.FIREBASE_APP_ID),
                "process.env.FIREBASE_MEASUREMENT_ID": JSON.stringify(process.env.FIREBASE_MEASUREMENT_ID)
            })
        ],
        devtool: isProduction ? "source-map" : "inline-source-map", //source-map makes budle.js a big file
        devServer: {
            contentBase: path.join(__dirname, "public"), 
            historyApiFallback: true,
            publicPath: "/dist/"
        }
    };  
};