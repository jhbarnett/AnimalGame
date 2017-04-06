import { delay } from 'redux-saga';
import { put, call, takeEvery } from 'redux-saga/effects';
import * as API from './API';
import TYPE from '../actionTypes';

export function* loadGame(action) {
  const game = yield call(API.retrieveGame, action.payload);
  yield put({type: 'GAME_LOADED', payload: game});
}

export function* watchLoadGame() {
  yield takeEvery('LOAD_GAME', loadGame);
}