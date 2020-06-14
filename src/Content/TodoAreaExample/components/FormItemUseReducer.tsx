import React from 'react';
import { ItemStatus } from '../state-management/constants';

const FormItemUseReducer = () => {
  // const [state, dispatch] = useReducer(reducer, initialState, init);

  return (
    <div>
      <form>
        <input
          type="text"
          name="title"
          // value={state.title || ''}
          // onChange={onChange}
          placeholder="title"
        />
        <div style={{ display: 'flex' }}>
          <input
            type="text"
            name="confirmTitle"
            // value={state.confirmTitle || ''}
            // onChange={onChange}
            placeholder="confirm title"
          />
          <div>
            {/* <div>{error.title}</div>
        <div>{error.confirmTitle}</div> */}
          </div>
        </div>
        <br />
        <button onClick={() => {}}>Submit</button>
        <select
          name="status"
          // onChange={onChange} value={state.status || ''}
        >
          <option value="">Select one</option>
          <option value={ItemStatus.TODO}>TODO</option>
          <option value={ItemStatus.DOING}>DOING</option>
          <option value={ItemStatus.DONE}>DONE</option>
        </select>
        {/* <div>{error.status}</div> */}
      </form>
    </div>
  );
};

export default FormItemUseReducer;
