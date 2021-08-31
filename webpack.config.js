const path = require('path')

module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [
            // TypeScriptのビルド設定 (拡張子.tsに対してts-loaderを実行)
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        publicPath: 'dist/',
    }
}