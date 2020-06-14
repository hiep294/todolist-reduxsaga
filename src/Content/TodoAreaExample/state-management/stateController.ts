import {
  IAction,
  IInitialState,
  FIND_TODOS_STARTED,
  FIND_TODOS_SUCCEEDED,
  FIND_TODOS_FAILED,
  CREATE_TODO_STARTED,
  CREATE_TODO_SUCCEEDED,
  CREATE_TODO_FAILED,
  TODO_RESET_STATE,
} from './constants';
import produce from 'immer';
import { toast } from 'react-toastify';

const initialState: IInitialState = {
  items: [],
  loading: false, // flexible create new status 'mutating'
  totalRow: 0,
  pageIndex: 1,
  pageSize: 10,
  /** OPTIONAL IN AN AREA **/
  sort: {},
  filter: {},
  itemId: '',
  chosenItemIds: [''],
};

export default (state = initialState, action: IAction) => {
  const nextState = produce(state, (draftState: IInitialState) => {
    switch (action.type) {
      case CREATE_TODO_STARTED: {
        draftState.loading = true;
        break;
      }
      case CREATE_TODO_SUCCEEDED: {
        const itemCompleted = action.payload;
        draftState.items.push(itemCompleted);
        toast.success('created success');
        draftState.loading = false;
        break;
      }
      case CREATE_TODO_FAILED: {
        const errorMessage = action.payload;
        toast.error(errorMessage || 'created failed');
        draftState.loading = false;
        break;
      }

      // ...

      case FIND_TODOS_STARTED: {
        draftState.loading = true;
        break;
      }
      case FIND_TODOS_SUCCEEDED: {
        const { items, totalRow } = action.payload;
        draftState.totalRow = totalRow;
        draftState.items = items;
        draftState.loading = false;
        break;
      }
      case FIND_TODOS_FAILED: {
        // const errorMessage = action.payload;
        draftState.loading = false;
        break;
      }

      // ...

      case TODO_RESET_STATE: {
        return initialState;
      }
      default:
        break;
    }
  });
  return nextState;
};
