import { Food } from "./food.js";
/**
 * 食べ物全般を表すクラス
 */
export class Foods {
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
//# sourceMappingURL=foods.js.map