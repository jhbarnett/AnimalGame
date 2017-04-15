import { put, call, takeEvery } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import * as API from './API';
import TYPE from '../actionTypes';

export function* submitUser(action) {  
  const res = yield call(API.loginUser, action.payload);
  if (res.status == 201) {
    yield put({type: 'USER_AUTHENTICATED', payload: res.json()});
  } else {
    // HANDLE INVALID USER SUBMISSION
  }
}

export function* watchCreateUser() {
  yield takeEvery('CREATE_USER', submitUser);
}