import { ScoreInterface } from "./interface.js";
import { Foods } from "./foods.js";

/**
 * 健康スコアを表すクラス
 */
export class Score implements ScoreInterface {
    // スコアは1つのインスタンスだけにする。毎回newするのはだめ。シングルトンパターン
    private static instance: Score;

    // Scoreインスタンスは1つまでしか生成したくないのでシングルトンパターンにするためにprivateを付ける
    private constructor() { }

    /**
     * シングルトンパターンのためのメソッド
     */
    static getInstance() {
        // インスタンスがなければ生成する、あれば生成しない
        if(!Score.instance) {
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
        document.querySelector('.score__number')!.textContent = String(this.totalScore);
    }
}