// Core
import { all, call } from 'redux-saga/effects';

// Watchers
import { watchPosts } from '../bus/posts/saga/watcher';
import { watchAuth } from '../bus/auth/saga/watcher';

export function* rootSaga () {
    yield all([call(watchPosts), call(watchAuth)]);
}