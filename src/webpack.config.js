// node.jsの書き方。js風に言うとpathと言うクラスをimportしている
// pathの中には今のディレクトリが入っている
const path = require('path'); 

module.exports = {
    entry: './html/js/dist/main.js', // 読み込むメインのファイル
    output: {
        filename: '[contenthash]bundle.js', // 出力後のファイル名
        path: path.resolve(__dirname, 'html', 'js', 'dist') //　出力先。絶対パスで指定する
    },
    mode: 'production'
}