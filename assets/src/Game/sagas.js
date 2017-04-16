import { put, call, takeEvery } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import * as API from './API';
import TYPE from '../actionTypes';

export function* loadGame(action) {
  const game = yield call(API.retrieveGame, action.payload);
  yield put({type: 'GAME_LOADED', payload: game});
}

export function* watchLoadGame() {
  yield takeEvery('LOAD_GAME', loadGame);
}

export function* submitGuess(action) {
  const game = action.payload.game;
  const question = action.payload.input;
  const data = yield call(API.postQuestion, game, question);

  yield put({type: 'QUESTION_CREATED', payload: data});
  yield put({type: TYPE.NAVIGATE, payload: 'Lobby'})
  yield put(push('/'));

  //TODO: CHANGE TURN ON QUESTION OBJECT
}

export function* watchSubmitGuess() {
  yield takeEvery('SUBMIT_GUESS', submitGuess);
}

export function* retrieveQuestions(action) {
  const game = action.payload;
  const data = yield call(API.getAllQuestions, game);
  
  yield put({type: 'QUESTIONS_RETRIEVED', payload: data});
  const lastQuestion = data.slice(-1)[0];
  yield put({type: 'LAST_QUESTION_RETRIEVED', payload: lastQuestion });
}

export function* watchRetrieveQuestions() {
  yield takeEvery('RETRIEVE_QUESTIONS', retrieveQuestions);
}

export function* submitAnswer(action) {
  const questionID = action.payload.id;
  const data = yield call(API.updateQuestion, questionID, action.payload);
  
  yield put({type: 'ANSWER_RETRIEVED', payload: data});
  yield put({type: TYPE.NAVIGATE, payload: 'Lobby'})
  yield put(push('/'));
}

export function* watchSubmitAnswer() {
  yield takeEvery('SUBMIT_ANSWER', submitAnswer);
}

export function* updateGame(action) {
  const data = yield call(API.updateGame, action.payload);
  
  yield put({type: 'GAME_UPDATED', payload: data});
}

export function* watchUpdateGame() {
  yield takeEvery('UPDATE_GAME', updateGame);
}