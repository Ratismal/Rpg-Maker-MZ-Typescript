declare namespace TextManager {

    export function basic(basicId: number): string;
    export function param(paramId: number): string;
    export function command(commandId: number): string;
    export function message(messageId: number): string;

    export function getter(method: 'basic' | 'command', param: number): () => string;
    export function getter(method: 'message', param: string): () => string;

    export const currencyUnit: string;

    export const level: string;
    export const levelA: string;
    export const hp: string;
    export const hpA: string;
    export const mp: string;
    export const mpA: string;
    export const tp: string;
    export const tpA: string;
    export const exp: string;
    export const expA: string;
    export const fight: string;
    export const escape: string;
    export const attack: string;
    export const guard: string;
    export const item: string;
    export const skill: string;
    export const equip: string;
    export const status: string;
    export const formation: string;
    export const save: string;
    export const gameEnd: string;
    export const options: string;
    export const weapon: string;
    export const armor: string;
    export const keyItem: string;
    export const equip2: string;
    export const optimize: string;
    export const clear: string;
    export const newGame: string;
    export const continue_: string;
    export const toTitle: string;
    export const cancel: string;
    export const buy: string;
    export const sell: string;
    export const alwaysDash: string;
    export const commandRemember: string;
    export const touchUI: string;
    export const bgmVolume: string;
    export const bgsVolume: string;
    export const meVolume: string;
    export const seVolume: string;
    export const possession: string;
    export const expTotal: string;
    export const expNext: string;
    export const saveMessage: string;
    export const loadMessage: string;
    export const file: string;
    export const autosave: string;
    export const partyName: string;
    export const emerge: string;
    export const preemptive: string;
    export const surprise: string;
    export const escapeStart: string;
    export const escapeFailure: string;
    export const victory: string;
    export const defeat: string;
    export const obtainExp: string;
    export const obtainGold: string;
    export const obtainItem: string;
    export const levelUp: string;
    export const obtainSkill: string;
    export const useItem: string;
    export const criticalToEnemy: string;
    export const criticalToActor: string;
    export const actorDamage: string;
    export const actorRecovery: string;
    export const actorGain: string;
    export const actorLoss: string;
    export const actorDrain: string;
    export const actorNoDamage: string;
    export const actorNoHit: string;
    export const enemyDamage: string;
    export const enemyRecovery: string;
    export const enemyGain: string;
    export const enemyLoss: string;
    export const enemyDrain: string;
    export const enemyNoDamage: string;
    export const enemyNoHit: string;
    export const evasion: string;
    export const magicEvasion: string;
    export const magicReflection: string;
    export const counterAttack: string;
    export const substitute: string;
    export const buffAdd: string;
    export const debuffAdd: string;
    export const buffRemove: string;
    export const actionFailure: string;

}

export { TextManager };