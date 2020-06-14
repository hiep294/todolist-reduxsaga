import { takeEvery, put, call, all, select, delay } from 'redux-saga/effects';
import {
  IAction,
  CREATE_TODO_STARTED,
  CREATE_TODO_FAILED,
  //////////////
  FIND_TODOS_STARTED,
  FIND_TODOS_FAILED,
  // FIND_TODOS_SUCCEEDED,
  //////////////
  GET_TODO_STARTED,
  GET_TODO_FAILED,
  //////////////
  UPDATE_TODO_STARTED,
  UPDATE_TODO_FAILED,
  //////////////
  DELETE_TODO_STARTED,
  DELETE_TODO_FAILED,
  CREATE_TODO_SUCCEEDED,
} from './constants';
import * as todoService from './service';
import areaActions from './actions';
import { selectFindingConditions } from './selectors';

// CONTROLLERS
const config = {
  [CREATE_TODO_STARTED]: function* (action: IAction) {
    try {
      const { payload: itemRaw, callback } = action;

      yield delay(1000);

      const result = yield todoService.createTodo(itemRaw);
      // result is based on server
      const itemCompleted = result;
      if (callback) callback();
      yield put(areaActions[CREATE_TODO_SUCCEEDED](itemCompleted));
      // if has result, but success is false, can throw new Error(message)
    } catch ({ message }) {
      yield put(areaActions[CREATE_TODO_FAILED](message));
    }
  },

  [FIND_TODOS_STARTED]: function* () {
    try {
      const findingConditions = yield select(selectFindingConditions);
      console.log(findingConditions);
      const result = yield call(todoService.findTodos, findingConditions);
      console.log({ result });
    } catch ({ message }) {
      yield put(areaActions[FIND_TODOS_FAILED](message));
    }
  },
  [GET_TODO_STARTED]: function* (action: IAction) {
    try {
    } catch ({ message }) {
      yield put(areaActions[GET_TODO_FAILED](message));
    }
  },

  [UPDATE_TODO_STARTED]: function* (action: IAction) {
    try {
    } catch ({ message }) {
      yield put(areaActions[UPDATE_TODO_FAILED](message));
    }
  },
  [DELETE_TODO_STARTED]: function* (action: IAction) {
    try {
    } catch ({ message }) {
      yield put(areaActions[DELETE_TODO_FAILED](message));
    }
  },
};

// BASE-SETTING
export default function* () {
  yield all([
    takeEvery(CREATE_TODO_STARTED, config[CREATE_TODO_STARTED]),
    takeEvery(FIND_TODOS_STARTED, config[FIND_TODOS_STARTED]),
    takeEvery(GET_TODO_STARTED, config[GET_TODO_STARTED]),
    takeEvery(UPDATE_TODO_STARTED, config[UPDATE_TODO_STARTED]),
    takeEvery(DELETE_TODO_STARTED, config[DELETE_TODO_STARTED]),
  ]);
}
