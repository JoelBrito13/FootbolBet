import {User} from "./User";

export class Bet {
  id: number;
  game: number;
  user: User;
  gameBet: GameResults;
  amount: number;
  gameFinished: boolean;
  balance: number;
}

enum GameResults {
  AW = 'AW',
  D = 'D',
  HW = 'HW'
}
