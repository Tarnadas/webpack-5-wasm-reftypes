const path = require("path");

module.exports = [
  {
    entry: "./src/index.js",
    devtool: "eval-cheap-source-map",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "index.js"
    },
    resolve: {
      extensions: [".js", ".wasm"]
    },
    experiments: {
      asyncWebAssembly: true
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                babelrc: false,
                presets: [
                  "@babel/env"
                ],
                plugins: [
                  "@babel/plugin-syntax-dynamic-import",
                ]
              }
            }
          ]
        }
      ]
    }
  }
];
