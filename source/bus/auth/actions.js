// Types
import { types } from './types';

export const authActions = {
    // Synk
    authenticate: () => {
        return {
            type: types.AUTHENTICATE,
        }
    },
    initialize: () => {
        return {
            type: types.INITIALIZE,
        }
    },
    logout: () => {
        return {
            type: types.LOGOUT,
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
    },
    authenticateAsync: () => {
        return {
            type: types.AUTHENTICATE_ASYNC,
        }
    },
    initializeAsync: () => {
        return {
            type: types.INITIALIZE_ASYNC,
        }
    },
    logoutAsync: () => {
        return {
            type: types.LOGOUT_ASYNC,
        }
    },
};