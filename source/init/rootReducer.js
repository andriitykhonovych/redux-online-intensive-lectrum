import { combineReducers } from 'redux';

import { postsReducer as posts} from '../bus/posts/reduser';
import { uiReducer as ui} from '../bus/ui/reducer';

export const rootReducer = combineReducers({
    posts,
    ui,
});