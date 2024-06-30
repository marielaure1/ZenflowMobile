import { AuthActionTypes } from '@stores/auth/auth.enum';

export const loginRequest = () => ({
  type: AuthActionTypes.LOGIN_REQUEST,
});

export const loginSuccess = (token) => ({
  type: AuthActionTypes.LOGIN_SUCCESS,
  payload: token,
});

export const loginFailure = (error) => ({
  type: AuthActionTypes.LOGIN_FAILURE,
  payload: error,
});

export const logout = () => ({
  type: AuthActionTypes.LOGOUT,
});
