import { Reducer } from 'redux';
import { AuthActionTypes } from '@stores/auth/auth.enum';

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
};

const authReducer: Reducer<AuthState> = (state = initialState, action) => {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        token: action.token,
      };
    case AuthActionTypes.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        token: null,
      };
    default:
      return state;
  }
};

export default authReducer;
