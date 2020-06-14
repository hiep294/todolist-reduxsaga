export const AREA_NAME = 'todo';

export const CREATE_TODO_STARTED = 'CREATE_TODO_STARTED';
export const CREATE_TODO_SUCCEEDED = 'CREATE_TODO_SUCCEEDED';
export const CREATE_TODO_FAILED = 'CREATE_TODO_FAILED';
// can apply create and update but some cases can make conflicts

export const FIND_TODOS_STARTED = 'FIND_TODOS_STARTED';
export const FIND_TODOS_SUCCEEDED = 'FIND_TODOS_SUCCEEDED';
export const FIND_TODOS_FAILED = 'FIND_TODOS_FAILED';

export const GET_TODO_STARTED = 'GET_TODO_STARTED';
export const GET_TODO_SUCCEEDED = 'GET_TODO_SUCCEEDED';
export const GET_TODO_FAILED = 'GET_TODO_FAILED';

export const UPDATE_TODO_STARTED = 'UPDATE_TODO_STARTED';
export const UPDATE_TODO_SUCCEEDED = 'UPDATE_TODO_SUCCEEDED';
export const UPDATE_TODO_FAILED = 'UPDATE_TODO_FAILED';

export const DELETE_TODO_STARTED = 'DELETE_TODO_STARTED';
export const DELETE_TODO_SUCCEEDED = 'DELETE_TODO_SUCCEEDED';
export const DELETE_TODO_FAILED = 'DELETE_TODO_FAILED';

export const TODO_RESET_STATE = 'TODO_RESET_STATE';

export enum ItemStatus {
  TODO = 'TODO',
  DOING = 'DOING',
  DONE = 'DONE',
}

export interface IItem {
  // custom here!
  id?: string;
  title?: string;
  confirmTitle?: string;
  status?: ItemStatus.TODO | ItemStatus.DOING | ItemStatus.DONE | string; // string for setting error message of status => view FormItem.tsx in components folder
  [key: string]: any;
}

export interface ISort {
  // custom here!
  [key: string]: 'ASC' | 'DESC'; // example: sort: {name: 'ASC', age: 'DESC'}
}

export interface IFilter {
  // custom here!
  [key: string]: number | string; //example: filter: {	ageLargerThan: 12, nameContain: "hiep" }
}

export interface IInitialState {
  // custom here!
  items: Array<IItem>; // used for only list and search
  loading: boolean;
  totalRow: number;
  pageIndex: number;
  pageSize: number;
  /** OPTIONAL IN A PAGE **/
  sort: ISort;
  filter: IFilter;
  itemId: string; // if item is '' => hide popup, if item is not '' => show popup, should not use itemIndex because if a newest created item is unshifted into array, the index will be changed.
  chosenItemIds: Array<string>; // array of id,
  // can use the following method: arr.includes, arr.find, arr.indexOf, arr.filter
}

export interface IGlobalState {
  [AREA_NAME]: IInitialState;
}

export interface IAction {
  type: string;
  payload?: any;
  callback?: Function; // callback can use for clear form in component state, should be called before doing something success
}
