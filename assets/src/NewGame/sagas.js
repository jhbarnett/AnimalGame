import TYPE from '../actionTypes'
import { delay } from 'redux-saga'
import { put, call, takeEvery } from 'redux-saga/effects'
import { push } from 'react-router-redux'

export function* makeNewGame() {
  try {
    //POST NEW GAME TO SERVER
    // TODO: yield call();

    yield put({type:'CREATE_GAME_SUCCESS'});
    //navigate to lobby on successful game creation
    yield put(push('/'));
  } 
  catch(err) {
    console.log(err)
    yield put({type:'CREATE_GAME_ERROR'})
  }
}

export function* watchCreateGame() {
  yield takeEvery(TYPE.CREATE_GAME, makeNewGame)
}
