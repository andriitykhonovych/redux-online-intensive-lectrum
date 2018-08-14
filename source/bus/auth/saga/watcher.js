// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { types } from '../types';

// Workers
import { signup, login } from './workers';

export function* watchSignup () {
    yield takeEvery(types.SYGNUP_ASYNK, signup);
}

export function* watchLogin () {
    yield takeEvery(types.LOGIN_ASYNK, login);
}

export function* watchAuth () {
    yield all([call(watchSignup), call(watchLogin)]);
}