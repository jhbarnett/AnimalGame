import { put, call, takeEvery } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import * as API from './API';
import TYPE from '../actionTypes';

export function* submitUser(action) {
  const user = yield call(API.loginUser, action.payload);
  if (user.hasOwnProperty('id')) {
    yield put({type: 'USER_AUTHENTICATED', payload: user});
  } else {
    // HANDLE INVALID USER SUBMISSION
    console.log("------INVALID USER------");
  }
}

export function* watchSetUser() {
  yield takeEvery('SET_USER', submitUser);
}

export function* getUsers(action) {  
  const users = yield call(API.getAllUsers);
  yield put({type: 'RETRIEVED_USERS', payload: users});
}

export function* watchGetAllUsers() {
  yield takeEvery('GET_ALL_USERS', getUsers);
}
