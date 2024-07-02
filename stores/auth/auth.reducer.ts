import { Reducer } from 'redux';
import { AuthActionTypes } from '@stores/auth/auth.enum';

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  customer: object | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  customer: null,
  loading: false,
  error: null,
};

const authReducer: Reducer<AuthState> = (state = initialState, action) => {
  switch (action.type) {
    case AuthActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case AuthActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        token: action.token,
        customer: action.customer,
        loading: false,
        error: null
      };
    case AuthActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case AuthActionTypes.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        customer: null,
        loading: false,
        error: null
      };
    default:
      return state;
  }
};

export default authReducer;
