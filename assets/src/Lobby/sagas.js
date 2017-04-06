import { put, call, select, takeEvery } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import * as API from './API';
import TYPE from '../actionTypes';

export function* fetchOpenGames(action) {
  const data = yield call(API.getOpenGames, /*TODO: PASS IN USER*/);
  yield put({type: TYPE.OPEN_GAMES_RETRIEVED, payload: data});
}

export function* watchGetOpenGames() {
  yield takeEvery(TYPE.GET_OPEN_GAMES, fetchOpenGames);
}

export function* enterGame(action) {
  const games = yield select((state) => state.playerGames.open);
  const grabGame = (id) => games.filter((game) => game.id === id);
  // yield put({type: 'GAME_ENTERED', payload: grabGame(action.payload)});
  yield put({type: TYPE.GAME_ENTERED, payload: games[0]});
  yield put({type: TYPE.NAVIGATE, payload: 'Play'});
  yield put(push('/game'));
}

export function* watchEnterGame() {
  yield takeEvery(TYPE.ENTER_GAME, enterGame);
}

