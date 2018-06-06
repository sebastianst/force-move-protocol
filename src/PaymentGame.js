import { toHex32, padBytes32 } from './utils';
import { State } from './CommonState';

class PaymentGame {
  static proposeState({ channel, resolution, turnNum, stateCount }) {
      return new InitializationState(...arguments);
  }
  static acceptState({ channel, resolution, turnNum, stateCount }) {
      return new FundConfirmationState(...arguments);
  }
  static gameState({ channel, resolution, turnNum }) {
      return new GameState(...arguments);
  }
  static concludeState({ channel, resolution, turnNum }) {
      return new ConcludeState(...arguments);
  }
}

class InitializationState extends State {
    constructor({ channel, resolution, turnNum, stateCount }) {
        super(...arguments);
        this.stateType = State.StateTypes.PROPOSE;
    }
}

class FundConfirmationState extends State {
    constructor({ channel, resolution, turnNum, stateCount }) {
        super(...arguments);
        this.stateType = State.StateTypes.ACCEPT;
    }
}

class GameState extends State {
    constructor({ channel, resolution, turnNum }) {
        super(...arguments);
        this.stateType = State.StateTypes.GAME;
    }
}

class ConcludeState extends State {
    constructor({ channel, resolution, turnNum }) {
        super(...arguments);
        this.stateType = State.StateTypes.CONCLUDE;
    }
}

export { PaymentGame };