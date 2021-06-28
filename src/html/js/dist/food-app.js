"use strict";
/**
 * 健康スコアを表すクラス
 */
class Score {
    // Scoreインスタンスは1つまでしか生成したくないのでシングルトンパターンにするためにprivateを付ける
    constructor() { }
    /**
     * シングルトンパターンのためのメソッド
     */
    static getInstance() {
        // インスタンスがなければ生成する、あれば生成しない
        if (!Score.instance) {
            Score.instance = new Score();
        }
        return Score.instance;
    }
    /**
     * 合計値を算出するゲッタープロパティ
     */
    get totalScore() {
        const foods = Foods.getInstance();
        // reduceで合計を出す。最初total=0から始まって、配列からscoreを一つずつ取り出してtotalに足していく
        return foods.activeElementsScore.reduce((total, score) => total + score, 0);
    }
    /**
     * トップ画面に合計の数値を表示するメソッド。クリック時に実行したい
     */
    render() {
        document.querySelector('.score__number').textContent = String(this.totalScore);
    }
}
/**
 * 　食べ物単体を表すクラス
 */
class Food {
    constructor(element) {
        this.element = element;
        // bind：この関数の中で使用されるthisは、このFoodクラス内のthisだよって宣言できる
        element.addEventListener('click', this.clickEventHandler.bind(this));
    }
    /**
     * クリックされた時の処理。
     * クリックされた要素の見栄えをアクティブ状態にする、かつ
     * スコアを計算し表示を変更する処理
     */
    clickEventHandler() {
        // toggleは、指定のクラスがあった場合は消す、なかったら付ける処理。
        // 関数の中でthisを使う場合は正しいthisを指し示さないので、bindを使う
        this.element.classList.toggle('food--active');
        // 同一のインスタンスを格納。シングルトンパターン。
        const score = Score.getInstance();
        score.render();
    }
}
/**
 * 食べ物全般を表すクラス
 */
class Foods {
    // Foodsインスタンスは1つまでしか生成したくないのでシングルトンパターンにするためにprivateを付ける
    constructor() {
        // クラスがfoodのdomを取得する。<HTMLDivElement>とすることでdivタグの要素を取得できる
        this.elements = document.querySelectorAll('.food');
        // 今アクティブになっている要素を格納する箱
        this._activeElements = [];
        // 今アクティブになっている要素のスコアを格納する箱
        this._activeElementsScore = [];
        // dom一つずつ処理。
        this.elements.forEach(element => {
            // Foodクラスでクリックイベントを追加する
            new Food(element);
        });
    }
    /**
     * シングルトンパターンのためのメソッド
     */
    static getInstance() {
        // インスタンスがなければ生成する、あれば生成しない
        if (!Foods.instance) {
            Foods.instance = new Foods();
        }
        return Foods.instance;
    }
    /**
     * アクティブなfood要素を取得するゲッタープロパティ。
     */
    get activeElements() {
        // 初期化
        this._activeElements = [];
        // クラスにfood-activeを含む要素だけを格納していく
        this.elements.forEach(element => {
            if (element.classList.contains('food--active')) {
                this._activeElements.push(element);
            }
        });
        return this._activeElements;
    }
    /**
     * アクティブなfood要素のスコア数値を取得するゲッタープロパティ
     */
    get activeElementsScore() {
        this._activeElementsScore = [];
        // 上のactiveElements()ゲッタープロパティから要素を取得している
        this.activeElements.forEach(element => {
            const foodScore = element.querySelector('.food__score');
            if (foodScore) {
                this._activeElementsScore.push(Number(foodScore.textContent));
            }
        });
        return this._activeElementsScore;
    }
}
const foods = Foods.getInstance();
//# sourceMappingURL=food-app.js.map