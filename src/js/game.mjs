import Character from './domain.mjs';

class Game {
    start() {
      console.log('game started');
    }
}

const defaultGame = Game();

export default defaultGame;

export class GameSavingData {}

export function readGameSaving() {}

export function writeGameSaving() {}
