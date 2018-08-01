import { combineReducers } from 'redux';

import { galleryReducer } from '../../bus/gallery/reduser';

export const rootReducer = combineReducers({
    gallery: galleryReducer,
});