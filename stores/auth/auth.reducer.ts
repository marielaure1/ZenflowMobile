import { Reducer } from 'redux';
import { AuthActionTypes } from '@stores/auth/auth.enum';

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  customer: object | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  customer: null
};

const authReducer: Reducer<AuthState> = (state = initialState, action) => {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        token: action.token,
        customer: action.customer
      };
    case AuthActionTypes.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        customer: null
      };
    default:
      return state;
  }
};

export default authReducer;
