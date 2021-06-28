
## 概要
健康管理App

## 環境構築参考記事

> https://qiita.com/reflet/items/538753d5dcf3560567a9

## メモ
ローカルサーバ：http://localhost:8080

## あとからインストールしたもの

###  実行場所

```
$ make work-node
```

- webpack
- webpack-cli

```
/usr/src/app# npm install --save-dev webpack webpack-cli
```

- ts-loader
- typescript

```
/usr/src/app# npm install --save-dev ts-loader typescript
```

- clean-webpack-plugin (コンパイルする際に、一旦今あるjsファイルを削除してくれる)

```
/usr/src/app# npm install --save-dev clean-webpack-plugin
```