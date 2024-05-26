import { AuthActionTypes } from '@stores/auth/auth.enum';

export type AuthAction = {
    type: AuthActionTypes;
    token?: string;
};

export const login = (token: string): AuthAction => ({
    type: AuthActionTypes.LOGIN,
    token: token, 
  });

export const logout = (): AuthAction => ({
    type: AuthActionTypes.LOGOUT,
});