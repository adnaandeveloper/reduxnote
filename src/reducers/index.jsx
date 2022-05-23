import { combineReducers } from 'redux';
import counterReducer from './counter';
import loggedReducer from './isLogged';

const allReducers = combineReducers({
  counter: counterReducer,
  login: loggedReducer,
});

export default allReducers;

/**
 * counter and login ( thise names can be called what ever we wants,
 * counter: counterReducer; we could also do
 * counterReducer and it means counterReducer:counterReducer
 *
 * )
 *
 *
 */
