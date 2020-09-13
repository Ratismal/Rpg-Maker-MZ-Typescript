import { Window_StatusBase } from ".";

import { Rectangle, Sprite, Window } from "rmmz_core";
import { Game_Actor } from "rmmz_objects";
import { Window_Base } from "./Window_Base";
import { Window_Help } from "./Window_Help";

/**
 * Window_NameEdit
 * 
 * The window for editing an actor's name on the name input screen.
 */
declare class Window_NameEdit implements Omit<Window_StatusBase, 'name' | keyof Window> {
    constructor(rect: Rectangle);
    public loadFaceImages(): void;
    public hideAdditionalSprites(): void;
    public placeActorName(actor: Game_Actor, x: number, y: number): void;
    public placeStateIcon(actor: Game_Actor, x: number, y: number): void;
    public placeGauge(actor: Game_Actor, type: string, x: number, y: number): void;
    public createInnerSprite(key: string, spriteClass: new () => Sprite): Sprite;
    public placeTimeGauge(actor: Game_Actor, x: number, y: number): void;
    public placeBasicGauges(actor: Game_Actor, x: number, y: number): void;
    public gaugeLineHeight(): number;
    public drawActorCharacter(actor: Game_Actor, x: number, y: number): void;
    public drawActorFace(actor: Game_Actor, x: number, y: number, width: number, height: number): void;
    public drawActorName(actor: Game_Actor, x: number, y: number, width: number): void;
    public drawActorClass(actor: Game_Actor, x: number, y: number, width: number): void;
    public drawActorNickname(actor: Game_Actor, x: number, y: number, width: number): void;
    public drawActorLevel(actor: Game_Actor, x: number, y: number): void;
    public drawActorIcons(actor: Game_Actor, x: number, y: number, width: number): void;
    public drawActorSimpleStatus(actor: Game_Actor, x: number, y: number): void;
    public actorSlotName(actor: Game_Actor, index: number): string;
    public index(): number;
    public cursorFixed(): boolean;
    public setCursorFixed(cursorFixed: boolean): void;
    public cursorAll(): boolean;
    public setCursorAll(cursorAll: boolean): void;
    public maxCols(): number;
    public maxItems(): number;
    public colSpacing(): number;
    public rowSpacing(): number;
    public itemWidth(): number;
    public itemHeight(): number;
    public contentsHeight(): number;
    public maxRows(): number;
    public overallHeight(): number;
    public activate(): void;
    public deactivate(): void;
    public select(index: number): void;
    public forceSelect(index: number): void;
    public smoothSelect(index: number): void;
    public deselect(): void;
    public reselect(): void;
    public row(): number;
    public topRow(): number;
    public maxTopRow(): number;
    public setTopRow(row: number): void;
    public maxPageRows(): number;
    public maxPageItems(): number;
    public maxVisibleItems(): number;
    public isHorizontal(): boolean;
    public topIndex(): number;
    public itemRectWithPadding(index: number): Rectangle;
    public itemLineRect(index: number): Rectangle;
    public setHelpWindow(helpWindow: Window_Help): void;
    public showHelpWindow(): void;
    public hideHelpWindow(): void;
    public setHandler(symbol: string, method: VoidFunction): void;
    public isHandled(symbol: string): boolean;
    public callHandler(symbol: string): void;
    public isOpenAndActive(): boolean;
    public isCursorMovable(): boolean;
    public cursorDown(wrap: boolean): void;
    public cursorUp(wrap: boolean): void;
    public cursorRight(wrap: boolean): void;
    public cursorLeft(wrap: boolean): void;
    public cursorPagedown(): void;
    public cursorPageup(): void;
    public isScrollEnabled(): boolean;
    public processCursorMove(): void;
    public processHandling();
    public processTouch(): void;
    public isHoverEnabled(): boolean;
    public onTouchSelect(trigger: boolean): void;
    public onTouchOk(): void;
    public onTouchCancel(): void;
    public hitIndex(): number;
    public hitTest(x: number, y: number): number;
    public isTouchOkEnabled(): boolean;
    public isOkEnabled(): boolean;
    public isCancelEnabled(): boolean;
    public isOkTriggered(): boolean;
    public isCancelTriggered(): boolean;
    public processOk(): void;
    public callOkHandler(): void;
    public processCancel(): void;
    public callCancelHandler(): void;
    public processPageup(): void;
    public processPagedown(): void;
    public updateInputData(): void;
    public ensureCursorVisible(smooth: boolean): void;
    public callUpdateHelp(): void;
    public updateHelp(): void;
    public setHelpWindowItem(item: { iconIndex: number; name: string; description: string; }): void;
    public isCurrentItemEnabled(): boolean;
    public drawAllItems(): void;
    public drawItem(index: number): void;
    public clearItem(index: number): void;
    public drawItemBackground(index: number): void;
    public drawBackgroundRect(rect: Rectangle): void;
    public redrawItem(index: number): void;
    public redrawCurrentItem(): void;
    public paint(): void;
    public refreshCursor(): void;
    public refreshCursorForAll(): void;
    public clearScrollStatus(): void;
    public scrollX(): number;
    public scrollY(): number;
    public scrollBaseX(): number;
    public scrollBaseY(): number;
    public scrollTo(x: number, y: number): void;
    public scrollBy(x: number, y: number): void;
    public smoothScrollTo(x: number, y: number): void;
    public smoothScrollBy(x: number, y: number): void;
    public setScrollAccel(x: number, y: number): void;
    public overallWidth(): number;
    public maxScrollX(): number;
    public maxScrollY(): number;
    public scrollBlockWidth(): number;
    public scrollBlockHeight(): number;
    public smoothScrollDown(n: number): void;
    public smoothScrollUp(n: number): void;
    public processWheelScroll(): void;
    public processTouchScroll(): void;
    public isWheelScrollEnabled(): boolean;
    public isTouchScrollEnabled(): boolean;
    public isTouchedInsideFrame(): boolean;
    public onTouchScrollStart(): void;
    public onTouchScroll(): void;
    public onTouchScrollEnd(): void;
    public updateSmoothScroll(): void;
    public updateScrollAccel(): void;
    public updateArrows(): void;
    public updateOrigin(): void;
    public updateScrollBase(baseX: number, baseY: number): void;
    public checkRectObject(rect: Rectangle): void;
    public lineHeight(): number;
    public itemPadding(): number;
    public baseTextRect(): Rectangle;
    public loadWindowskin(): void;
    public updatePadding(): void;
    public updateBackOpacity(): void;
    public fittingHeight(numLines: number): number;
    public updateTone(): void;
    public createContents(): void;
    public destroyContents(): void;
    public contentsWidth(): number;
    public resetFontSettings(): void;
    public resetTextColor(): void;
    public updateOpen(): void;
    public updateClose(): void;
    public open(): void;
    public close(): void;
    public isOpening(): boolean;
    public isClosing(): boolean;
    public show(): void;
    public hide(): void;
    public systemColor(): string;
    public translucentOpacity(): number;
    public changeTextColor(color: string): void;
    public changeOutlineColor(color: string): void;
    public changePaintOpacity(enabled: boolean): void;
    public drawRect(x: number, y: number, width: number, height: number): void;
    public drawText(text: string | number, x: number, y: number, maxWidth: number, align: string): void;
    public textWidth(text: string): number;
    public drawTextEx(text: string, x: number, y: number, width: number): number;
    public textSizeEx(text: string): { width: number; height: number; };
    public createTextState(text: string, x: number, y: number, width: number): Window_Base.TextState;
    public processAllText(textState: Window_Base.TextState): void;
    public flushTextState(textState: Window_Base.TextState): void;
    public createTextBuffer(rtl: boolean): string;
    public convertEscapeCharacters(text: string): string;
    public actorName(n: number): string;
    public partyMemberName(n: number): string;
    public processCharacter(textState: Window_Base.TextState): void;
    public processControlCharacter(textState: Window_Base.TextState, c: string): void;
    public processNewLine(textState: Window_Base.TextState): void;
    public obtainEscapeCode(textState: Window_Base.TextState): void;
    public obtainEscapeParam(textState: Window_Base.TextState): string | number;
    public processEscapeCharacter(code: string, textState: Window_Base.TextState): void;
    public processColorChange(colorIndex: number): void;
    public processDrawIcon(iconIndex: number, textState: Window_Base.TextState): void;
    public makeFontBigger(): void;
    public makeFontSmaller(): void;
    public calcTextHeight(textState: Window_Base.TextState): number;
    public maxFontSizeInLine(line: string): number;
    public drawIcon(iconIndex: number, x: number, y: number): void;
    public drawFace(faceName: string, faceIndex: number, x: number, y: number, width: number, height: number): void;
    public drawCharacter(characterName: string, characterIndex: number, x: number, y: number): void;
    public drawItemName(item: { iconIndex: number; name: string; description: string; }, x: number, y: number, width: number): void;
    public drawCurrencyValue(value: string | number, unit: string, x: number, y: number, width: number): void;
    public setBackgroundType(type: number): void;
    public showBackgroundDimmer(): void;
    public createDimmerSprite(): void;
    public hideBackgroundDimmer(): void;
    public updateBackgroundDimmer(): void;
    public refreshDimmerBitmap(): void;
    public playCursorSound(): void;
    public playOkSound(): void;
    public playBuzzerSound(): void;
    public setup(actor: Game_Actor, maxLength: number): void;

    // Workaround to make TS accept bad OOP :s
    public name: () => string;

    public restoreDefault(): boolean;
    public add(ch: string): boolean;
    public back(): boolean;
    public faceWidth(): number;
    public charWidth(): number;
    public left(): number;
    public itemRect(index: number): Rectangle;
    public underlineRect(index: number): Rectangle;
    public underlineColor(): string;
    public drawUnderline(index: number): void;
    public drawChar(index: number): void;
    public refresh(): void;
}

export { Window_NameEdit }