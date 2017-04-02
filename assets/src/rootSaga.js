import * as newGame from './NewGame/sagas';

export default function* rootSaga() {
  yield [
    newGame.watchCreateGame()
  ]
}