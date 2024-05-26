import { Middleware } from 'redux';
import { AuthActionTypes  } from '@stores/auth/auth.enum.ts'; 

const authMiddleware: Middleware = store => next => action => {
  if (action.type === AuthActionTypes.LOGOUT) {
    localStorage.removeItem('token'); 
  } else if(action.type === AuthActionTypes.LOGIN){
    // localStorage.setItem('token',); 
  }
  return next(action);
};

export default authMiddleware;
   