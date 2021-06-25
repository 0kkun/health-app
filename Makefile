up:
		docker-compose up -d
stop:
		docker-compose stop
work:
		docker-compose exec app bash
# npmコマンドはここに入ってから実行する
work-node:
		docker-compose exec node bash
# tsファイルをコンパイル。"npm run build"コマンドで、Webpackのビルド処理を起動するようにする
tsc:
		docker-compose run --rm node npm run build