// Types
import { types } from './types';

export const authActions = {
    // Synk
    authenticate: () => {
        return {
            type: types.AUTHENTICATE,
        }
    },

    // Asynk
    signupAsync: (userData) => {
        return {
            type: types.SYGNUP_ASYNK,
            payload: userData,
        }
    },
    loginAsync: (credentials) => {
        return {
            type: types.LOGIN_ASYNK,
            payload: credentials,
        }
    }
};