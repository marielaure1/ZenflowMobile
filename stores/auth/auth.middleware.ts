import { Middleware } from 'redux';
import { AuthActionTypes  } from '@stores/auth/auth.enum'; 

const authMiddleware: Middleware = store => next => action => {
  if (action.type === AuthActionTypes.LOGOUT) {
    // localStorage.removeItem('token');
    // AsyncStorage.removeItem('token');
  } else if(action.type === AuthActionTypes.LOGIN){
    // localStorage.setItem('token', action.token);
    // AsyncStorage.setItem('token', action.token);
  }
  return next(action);
};

export default authMiddleware;
