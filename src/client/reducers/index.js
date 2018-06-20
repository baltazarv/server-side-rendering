import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import authReducers from './authReducer';

export default combineReducers({
  users: usersReducer,
  auth: authReducers
});
