import { put, call, takeEvery } from 'redux-saga/effects'

// Our worker Saga: will perform the async increment task
export function* fetchOpenGames(action) {
  const data = yield call(getOpenGames, /*TODO: PASS IN USER*/)
  yield put({type: 'OPEN_GAMES_RETRIEVED', payload: data})
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchGetOpenGames() {
  yield takeEvery('GET_OPEN_GAMES', fetchOpenGames)
}

function getOpenGames(user) {
  return fetch('/api/games')
    .then(res => res.json())
}