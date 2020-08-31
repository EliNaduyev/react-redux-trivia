import nameReducer from './name';
import typeReducer from './type';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
  name: nameReducer,
  type: typeReducer,
});

export default allReducers;
