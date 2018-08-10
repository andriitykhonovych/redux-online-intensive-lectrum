import { combineReducers } from 'redux';

import { postsReducer as posts} from '../bus/posts/reduser';

export const rootReducer = combineReducers({
    posts,
});