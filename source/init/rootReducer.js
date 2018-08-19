import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import { authReducer as auth} from '../bus/auth/reducer';
import { uiReducer as ui} from '../bus/ui/reducer';
import { profileReducer as profile} from '../bus/profile/reducer';
import { postsReducer as posts} from '../bus/posts/reducer';

export const rootReducer = combineReducers({
    auth,
    ui,
    profile,
    posts,
    router
});