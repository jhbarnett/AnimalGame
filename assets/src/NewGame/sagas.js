import TYPE from '../actionTypes'
import { delay } from 'redux-saga'
import { put, call, takeEvery } from 'redux-saga/effects'
import { push } from 'react-router-redux'

export function* makeNewGame(action) {
  try {
    //POST NEW GAME TO SERVER
    const data = yield call(fetch('/api/new'), action.payload);

    yield put({type:'CREATE_GAME_SUCCESS', payload: data});
    //navigate to lobby on successful game creation
    yield put(push('/'));
  } 
  catch(error) {
    console.log(error)
    yield put({type:'CREATE_GAME_ERROR', error})
  }
}

export function* watchCreateGame() {
  yield takeEvery(TYPE.CREATE_GAME, makeNewGame)
}
