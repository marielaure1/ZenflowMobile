import { createStore, applyMiddleware, combineReducers, Store } from 'redux';
import authReducer from '@stores/auth/auth.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
});

const store: Store = createStore(rootReducer);

export default store;
