import * as newGame from './NewGame/sagas';
import * as menu from './Menu/sagas';
import * as lobby from './Lobby/sagas';
import * as game from './Game/sagas';

export default function* rootSaga() {
  yield [
    newGame.watchCreateGame(),
    menu.watchToggleMenu(),
    lobby.watchGetOpenGames(),
    lobby.watchEnterGame(),
    game.watchLoadGame(),
    game.watchSubmitGuess(),
    game.watchRetrieveQuestions(),
    // game.watchGetLastQuestion()
  ]
}