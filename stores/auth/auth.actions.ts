import { AuthActionTypes } from '@stores/auth/auth.enum';

export type AuthAction = {
    type: AuthActionTypes;
    token?: string;
    customer?: object;
    error?: string;
};

export const loginRequest = (): AuthAction => ({
    type: AuthActionTypes.LOGIN_REQUEST,
});

export const loginSuccess = (token?: string, customer?: object): AuthAction => ({
    type: AuthActionTypes.LOGIN_SUCCESS,
    token: token, 
    customer: customer
});

export const loginFailure = (error: string): AuthAction => ({
    type: AuthActionTypes.LOGIN_FAILURE,
    error: error
});

export const logout = (): AuthAction => ({
    type: AuthActionTypes.LOGOUT,
});