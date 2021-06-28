/**
 * 健康スコアを表すクラス
 */
class Score {}

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
        this.element.classList.toggle('good--active');
    }
}

/**
 * 食べ物全般を表すクラス
 */
class Foods {
    // クラスがfoodのdomを取得する。<HTMLDivElement>とすることでdivタグの要素を取得できる
    elements = document.querySelectorAll<HTMLDivElement>('.food');

    constructor() {
        // dom一つずつ処理。
        this.elements.forEach(element => {
            // Foodクラスでクリックイベントを追加する
            new Food(element);
        })
    }
}

const foods = new Foods();