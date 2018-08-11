// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { types } from '../types';

// Workers
import { createPost, fillPosts } from './workers';

export function* watchCreatePost () {
    yield takeEvery(types.CREATE_POSTS_ASYNC, createPost);
    yield takeEvery(types.FETCH_POSTS_ASYNC, fillPosts);
}

export function* watchPosts () {
    yield all([call(watchCreatePost)]);
}