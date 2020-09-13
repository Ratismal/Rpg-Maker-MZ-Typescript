declare function Scene_MenuBase(...args: any[]): void;
declare class Scene_MenuBase {
    constructor(...args: any[]);
    constructor: typeof Scene_MenuBase;
    initialize(): void;
    create(): void;
    update(): void;
    helpAreaTop(): any;
    helpAreaBottom(): any;
    helpAreaHeight(): any;
    mainAreaTop(): any;
    mainAreaBottom(): any;
    mainAreaHeight(): number;
    actor(): any;
    updateActor(): void;
    _actor: any;
    createBackground(): void;
    _backgroundFilter: any;
    _backgroundSprite: Sprite;
    setBackgroundOpacity(opacity: any): void;
    createHelpWindow(): void;
    _helpWindow: Window_Help;
    helpWindowRect(): Rectangle;
    createButtons(): void;
    needsCancelButton(): boolean;
    createCancelButton(): void;
    _cancelButton: Sprite_Button;
    needsPageButtons(): boolean;
    createPageButtons(): void;
    _pageupButton: Sprite_Button;
    _pagedownButton: Sprite_Button;
    updatePageButtons(): void;
    arePageButtonsEnabled(): boolean;
    nextActor(): void;
    previousActor(): void;
    onActorChange(): void;
}