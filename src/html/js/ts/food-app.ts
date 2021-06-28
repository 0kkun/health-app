/**
 * 健康スコアを表すクラス
 */
class Score {
    get totalScore() {
        const foods = new Foods();
        // reduceで合計を出す。最初total=0から始まって、配列からscoreを一つずつ取り出してtotalに足していく
        return foods.activeElementsScore.reduce((total, score) => total + score, 0);
    }
}

/**
 * 　食べ物単体を表すクラス
 */
class Food {
    constructor(public element: HTMLDivElement) {
        // bind：この関数の中で使用されるthisは、このFoodクラス内のthisだよって宣言できる
        element.addEventListener('click', this.clickEventHandler.bind(this));
    }

    // クリックされた時の処理。
    clickEventHandler() {
        // toggleは、指定のクラスがあった場合は消す、なかったら付ける処理。
        // 関数の中でthisを使う場合は正しいthisを指し示さないので、bindを使う
        this.element.classList.toggle('food--active');
    }
}

/**
 * 食べ物全般を表すクラス
 */
class Foods {
    // クラスがfoodのdomを取得する。<HTMLDivElement>とすることでdivタグの要素を取得できる
    elements = document.querySelectorAll<HTMLDivElement>('.food');

    // 今アクティブになっている要素を格納する箱
    private _activeElements: HTMLDivElement[] = [];
    // 今アクティブになっている要素のスコアを格納する箱
    private _activeElementsScore: number[] = [];

    get activeElements() { // ゲッター。プロパティみたいな感じでアクセスできる。
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

    constructor() {
        // dom一つずつ処理。
        this.elements.forEach(element => {
            // Foodクラスでクリックイベントを追加する
            new Food(element);
        })
    }
}

const foods = new Foods();

// console.log(foods.activeElements);