import { FoodInterface } from "./interface";
import { Score } from "./score";

/**
 * 　食べ物単体を表すクラス
 */
export class Food implements FoodInterface {
    constructor(public element: HTMLDivElement) {
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
