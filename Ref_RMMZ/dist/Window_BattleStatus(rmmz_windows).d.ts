declare function Window_BattleStatus(...args: any[]): void;
declare class Window_BattleStatus {
    constructor(...args: any[]);
    constructor: typeof Window_BattleStatus;
    initialize(rect: any): void;
    frameVisible: boolean;
    openness: number;
    _bitmapsReady: number;
    extraHeight(): number;
    maxCols(): number;
    itemHeight(): any;
    maxItems(): any;
    rowSpacing(): number;
    updatePadding(): void;
    padding: number;
    actor(index: any): any;
    selectActor(actor: any): void;
    update(): void;
    preparePartyRefresh(): void;
    performPartyRefresh(): void;
    drawItem(index: any): void;
    drawItemImage(index: any): void;
    drawItemStatus(index: any): void;
    faceRect(index: any): any;
    nameX(rect: any): any;
    nameY(rect: any): number;
    stateIconX(rect: any): number;
    stateIconY(rect: any): any;
    basicGaugesX(rect: any): any;
    basicGaugesY(rect: any): number;
}