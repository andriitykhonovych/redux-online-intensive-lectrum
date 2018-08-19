// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { types } from '../types';

// Workers
import { createPost, fillPosts, removePost } from './workers';

export function* watchFetchPosts () {
    yield takeEvery(types.FETCH_POSTS_ASYNC, fillPosts);
}

export function* watchCreatePost () {
    yield takeEvery(types.CREATE_POSTS_ASYNC, createPost);
}

export function* watchRemovePost () {
    yield takeEvery(types.REMOVE_POST_ASYNC, removePost);
}

export function* watchPosts () {
    yield all([call(watchCreatePost), call(watchFetchPosts), call(watchRemovePost)]);
}