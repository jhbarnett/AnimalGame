import { delay } from 'redux-saga'
import { put, takeEvery } from 'redux-saga/effects'

// Our worker Saga: will perform the async increment task
export function* getGames() {
  yield delay(1000, {animal: 'tiger', player1: 'j', player2: 'o'})
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchGetGamesAsync() {
  yield takeEvery('GET_GAMES_ASYNC', getGames)
}
