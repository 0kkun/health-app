export interface ScoreInterface {
    readonly totalScore: number;
    render(): void;
}

export interface FoodInterface {
    element: HTMLDivElement;
    clickEventHandler(): void;
}

export interface FoodsInterface {
    elements: NodeListOf<HTMLDivElement>;
    readonly activeElements: HTMLDivElement[];
    readonly activeElementsScore: number[];
}
