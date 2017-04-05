import * as newGame from './NewGame/sagas';
import * as menu from './Menu/sagas';
import * as lobby from './Lobby/sagas';

export default function* rootSaga() {
  yield [
    newGame.watchCreateGame(),
    menu.watchToggleMenu(),
    lobby.watchGetOpenGames()
  ]
}