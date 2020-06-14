import { combineReducers } from 'redux';

import todoReducer from '../Content/TodoAreaExample/state-management/stateController';
import { AREA_NAME as TODO } from '../Content/TodoAreaExample/state-management/constants';

const prepared = {
  [TODO]: todoReducer,
};

const rootReducer = combineReducers(prepared);

export default rootReducer;
