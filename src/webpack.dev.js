// node.jsの書き方。js風に言うとpathと言うクラスをimportしている
// pathの中には今のディレクトリが入っている
const path = require('path'); 

module.exports = {
    mode: 'development',
    entry: './html/js/ts/food-app/main.ts', // 読み込むメインのファイル
    output: {
        filename: 'bundle.js', // 出力後のファイル名
        path: path.resolve(__dirname, 'html', 'js', 'dist') //　出力先。絶対パスで指定する
    },
    devtool: 'inline-source-map',
    // typescriptのコンパイル
    module: {
        rules: [{
            test: /\.ts$/,      // どういうファイル名のものに適用するか
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    // 拡張子がなかったらつけてあげるオプション。importとexportを解決するため
    resolve: {
        extensions: ['.ts', '.js']
    }
}