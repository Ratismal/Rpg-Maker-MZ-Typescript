declare class Game_CharacterBase {
  constructor();

  public readonly x: number;
  public readonly y: number;

  protected _x: number;
  protected _y: number;
  protected _realX: number;
  protected _realY: number;
  protected _moveSpeed: number;
  protected _moveFrequency: number;
  protected _opacity: number;
  protected _blendMode: number;
  protected _direction: number;
  protected _pattern: number;
  protected _priorityType: number;
  protected _tileId: number;
  protected _characterName: string;
  protected _characterIndex: number;
  protected _isObjectCharacter: boolean;
  protected _walkAnime: boolean;
  protected _directionFix: boolean;
  protected _through: boolean;
  protected _transparent: boolean;
  protected _bushDepth: number;
  protected _animationId: number;
  protected _balloonId: number;
  protected _animationPlaying: boolean;
  protected _balloonPlaying: boolean;
  protected _animationCount: number;
  protected _stopCount: number;
  protected _jumpCount: number;
  protected _jumpPeak: number;
  protected _movementSuccess: boolean;

  public initialize(): void;
  public initMembers(): void;

  public pos(x: number, y: number): boolean;
  public posNt(x: number, y: number): boolean;

  public moveSpeed(): number;
  public setMoveSpeed(moveSpeed: number): void;

  public moveFrequency(): number;
  public setMoveFrequency(moveFrequency: number): void;

  public opacity(): number;
  public setOpacity(opacity: number): void;

  public blendMode(): number;
  public setBlendMode(blendMode: number): void;

  public isNormalPriority(): boolean;
  public setProprityType(priorityType: number): void;
  public isMoving(): boolean;
  public isJumping(): boolean;
  public jumpHeight(): number;
  public isStopping(): boolean;
  public checkStop(threshold: number): void;
  public resetStopCount(): void;

  public realMoveSpeed(): number;
  public distancePerFrame(): number;

  public isDashing(): boolean;
  public isDebugThrough(): boolean;

  public straighten(): void;
  public reverseDir(d: number): number;

  public canPass(x: number, y: number, d: number): boolean;
  public canPassDiagonally(x: number, y: number, horz: number, vert: number): boolean;
  public isMapPassable(x: number, y: number, d: number): boolean;
  public isCollidedWithCharacters(x: number, y: number): boolean;
  public isCollidedWithEvents(x: number, y: number): boolean;
  public isCollidedWithVehicles(x: number, y: number): boolean;

  public setPosition(x: number, y: number): void;
  public copyPosition(character: Game_CharacterBase): void;
  public locate(x: number, y: number): void;

  public direction(): number;
  public setDirection(d: number): void;

  public isTile(): boolean;
  public isObjectCharacter(): boolean;

  public shiftY(): number;
  public scrolledX(): number;
  public scrolledY(): number;
  public screenX(): number;
  public screenY(): number;
  public screenZ(): number;

  public isNearTheScreen(): boolean;

  public update(): void;
  public updateStop(): void;
  public updateJump(): void;
  public updateMove(): void;
  public updateAnimation(): void;
  public animationWait(): number;
  public updateAnimationCount(): void;
  public updatePattern(): void;
  public maxPattern(): number;
  public pattern(): boolean;
  public setPattern(pattern: number): void;
  public isOriginalPattern(): boolean;
  public resetPattern(): void;
  public refreshBushDepth(): void;

  public isOnLadder(): boolean;
  public isOnBush(): boolean;
  public terrainTag(): number;
  public regionId(): number;

  public increaseSteps(): void;

  public tileId(): number;
  public characterName(): string;
  public characterIndex(): number;

  public setImage(characterName: string, characterIndex: number): void;
  public setTileImage(tileId: number): void;
  public checkEventTriggerTouchFront(d: number): void;
  public checkEventTriggerTouch(x: number, y: number): boolean;
  public isMovementSucceeded(x: number, y: number): boolean;
  public setMovementSuccess(success: boolean): void;

  public moveStraight(d: number): void;
  public moveDiagonally(horz: number, vert: number): void;
  public jump(xPlus: number, yPlus: number): void;

  public hasWalkAnime(): boolean;
  public setWalkAnime(walkAnime: boolean): void;
  public hasStepAnime(): boolean;
  public setStepAnime(stepAnime: boolean): void;
  public isDirectionFixed(): boolean;
  public setDirectionFixed(directionFixed: boolean): void;
  public isThrough(): boolean;
  public setThrough(through: boolean): void;

  public isTransparent(): boolean;
  public bushDepth(): number;
  public setTransparent(transparent: boolean): void;
  public startAnimation(): void;
  public startBalloon(): void;
  public isAnimationPlaying(): boolean;
  public isBalloonPlaying(): boolean;
  public endAnimation(): void;
  public endBalloon(): void;
}

export { Game_CharacterBase };