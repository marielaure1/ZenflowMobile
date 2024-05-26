import { createStore, applyMiddleware, combineReducers, Store } from 'redux';
import authReducer from '@stores/auth/auth.reducer';
import authMiddleware from '@stores/auth/auth.middleware';

const rootReducer = combineReducers({
  auth: authReducer,
});

const rootMiddleware = applyMiddleware(
  authMiddleware, 
);

const store: Store = createStore(rootReducer, rootMiddleware);

export default store;
