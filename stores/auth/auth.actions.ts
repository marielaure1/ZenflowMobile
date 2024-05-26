import { AuthActionTypes } from '@stores/auth/auth.enum';

export type AuthAction = {
    type: AuthActionTypes;
};

export const login = (): AuthAction => ({
    type: AuthActionTypes.LOGIN,
});

export const logout = (): AuthAction => ({
    type: AuthActionTypes.LOGOUT,
});