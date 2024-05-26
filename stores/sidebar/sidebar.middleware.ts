import { Middleware } from 'redux';
import { SidebarActionTypes } from '@stores/sidebar/sidebar.enum'; 

const sidebarMiddleware: Middleware = store => next => action => {
  if (action.type === FULL) {
    localStorage.removeItem('token'); 
  }
  return next(action);
};

export default sidebarMiddleware;
   