import { AuthActionTypes } from '@stores/auth/auth.enum';

export type AuthAction = {
    type: AuthActionTypes;
    token?: string;
    customer?: object;
};

export const login = (token?: string, customer?: object): AuthAction => ({
    type: AuthActionTypes.LOGIN,
    token: token, 
    customer: customer
  });

export const logout = (): AuthAction => ({
    type: AuthActionTypes.LOGOUT,
});