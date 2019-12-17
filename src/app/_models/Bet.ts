import {User} from "./User";
import construct = Reflect.construct;

export class Bet {
  id: number;
  game: number;
  user: User;
  game_bet: GameResults;
  amount: number;
  game_finished: boolean;
  balance: number;

  constructor(  id: number,  game: number, user: User, game_bet: GameResults, amount: number,  game_finished: boolean,  balance: number) {
    id = id;
    game = game;
    user = user;
    game_bet = game_bet;
    amount = amount;
    game_finished = game_finished;
    balance = balance;
  }

}

enum GameResults {
  AW = 'AW',
  D = 'D',
  HW = 'HW'
}
