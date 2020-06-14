import {
  IAction,
  IItem,
  // ...
  CREATE_TODO_STARTED,
  CREATE_TODO_SUCCEEDED,
  CREATE_TODO_FAILED,
  // ...
  FIND_TODOS_STARTED,
  FIND_TODOS_SUCCEEDED,
  FIND_TODOS_FAILED,
  GET_TODO_STARTED,
  GET_TODO_SUCCEEDED,
  GET_TODO_FAILED,
  // ...
  UPDATE_TODO_STARTED,
  UPDATE_TODO_SUCCEEDED,
  UPDATE_TODO_FAILED,
  // ...
  DELETE_TODO_STARTED,
  DELETE_TODO_SUCCEEDED,
  DELETE_TODO_FAILED,
  // ...
  TODO_RESET_STATE,
} from './constants';

const areaActions = {
  [CREATE_TODO_STARTED]: (itemRaw: IItem, callback = () => {}): IAction => ({
    type: CREATE_TODO_STARTED,
    payload: itemRaw,
    callback,
  }),
  [CREATE_TODO_SUCCEEDED]: (itemCompleted: IItem): IAction => ({
    type: CREATE_TODO_SUCCEEDED,
    payload: itemCompleted,
  }),
  [CREATE_TODO_FAILED]: (errorMessage = ''): IAction => ({
    type: CREATE_TODO_FAILED,
    payload: errorMessage,
  }),

  // ...

  [FIND_TODOS_STARTED]: (): IAction => ({
    type: FIND_TODOS_STARTED,
  }),
  [FIND_TODOS_SUCCEEDED]: ({ items = [{}], totalRow = 0 }): IAction => ({
    type: FIND_TODOS_SUCCEEDED,
    payload: items,
  }),
  [FIND_TODOS_FAILED]: (errorMessage = ''): IAction => ({
    type: FIND_TODOS_FAILED,
    payload: errorMessage,
  }),

  // ...

  [GET_TODO_STARTED]: (id = ''): IAction => ({
    type: GET_TODO_STARTED,
    payload: id,
  }),
  [GET_TODO_SUCCEEDED]: (item: IItem): IAction => ({
    type: GET_TODO_SUCCEEDED,
    payload: item,
  }),
  [GET_TODO_FAILED]: (errorMessage = ''): IAction => ({
    type: GET_TODO_FAILED,
    payload: errorMessage,
  }),

  // ...

  [UPDATE_TODO_STARTED]: (itemRaw: IItem): IAction => ({
    type: UPDATE_TODO_STARTED,
    payload: itemRaw,
  }),
  [UPDATE_TODO_SUCCEEDED]: (itemCompleted: IItem): IAction => ({
    type: UPDATE_TODO_SUCCEEDED,
    payload: itemCompleted,
  }),
  [UPDATE_TODO_FAILED]: (errorMessage = ''): IAction => ({
    type: UPDATE_TODO_FAILED,
    payload: errorMessage,
  }),

  // ...

  [DELETE_TODO_STARTED]: (id = ''): IAction => ({
    type: DELETE_TODO_STARTED,
    payload: id,
  }),
  [DELETE_TODO_SUCCEEDED]: (id = ''): IAction => ({
    type: DELETE_TODO_SUCCEEDED,
    payload: id,
  }),
  [DELETE_TODO_FAILED]: (errorMessage = ''): IAction => ({
    type: DELETE_TODO_FAILED,
    payload: errorMessage,
  }),

  // ...

  [TODO_RESET_STATE]: (): IAction => ({
    type: TODO_RESET_STATE,
  }),
};

export default areaActions;
