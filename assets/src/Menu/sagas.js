import { put, takeEvery } from 'redux-saga/effects'
import TYPE from '../actionTypes'

export function* updateLocale(action) {

  yield put({ type: TYPE.NAVIGATE, payload: action.payload })
}

export function* watchToggleMenu() {
  yield takeEvery(TYPE.TOGGLE_MENU, updateLocale)
}