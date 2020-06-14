import React, { useState, useEffect } from 'react';
import {
  ItemStatus,
  IItem,
  CREATE_TODO_STARTED,
} from '../state-management/constants';
import { useDispatch } from 'react-redux';
import areaActions from '../state-management/actions';

/**
 * result: have to re-render twice when a value change, use callback for call back this component to clear state, but less bugs, there can also trigger when change state in global
 */
const FormItemUseState = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState<IItem>({});

  const [error, setError] = useState<IItem>({});

  const [shouldSubmit, setShouldSubmit] = useState(false);

  const onChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    let title = state.title;
    if (title !== undefined || shouldSubmit) {
      title = title || '';
      let errorMessage = '';
      if (title.length === 0) {
        errorMessage = 'Title is required!';
      }
      if (title.length < 3) {
        errorMessage = 'Title is quite short';
      }
      setError((error) => ({
        ...error,
        title: errorMessage,
      }));
      return errorMessage ? setShouldSubmit(false) : undefined;
    }
  }, [state.title, shouldSubmit]);

  useEffect(() => {
    let confirmTitle = state.confirmTitle;
    if (confirmTitle !== undefined || shouldSubmit) {
      confirmTitle = confirmTitle || '';
      const title = state.title || '';
      let errorMessgage = '';
      if (confirmTitle !== title) {
        errorMessgage = 'Confirm title is not match';
      }
      setError((error) => ({
        ...error,
        confirmTitle: errorMessgage,
      }));
      return errorMessgage ? setShouldSubmit(false) : undefined;
    }
  }, [state.title, state.confirmTitle, shouldSubmit]);

  useEffect(() => {
    let status = state.status;
    if (status !== undefined || shouldSubmit) {
      status = status || '';
      let errorMessage = '';
      if (status === '') {
        errorMessage = 'Status is required';
      }
      setError((error) => ({
        ...error,
        status: errorMessage,
      }));
      return errorMessage ? setShouldSubmit(false) : undefined;
    }
  }, [state.status, shouldSubmit]);

  // demo change full state, but still trigger effects
  // useEffect(() => {
  //   setTimeout(() => {
  //     setState({
  //       title: '',
  //       confirmTitle: '',
  //       status: '',
  //     });
  //   }, 3000);
  // }, []);

  useEffect(() => {
    const { confirmTitle, status, title } = error;
    if (shouldSubmit && confirmTitle === '' && status === '' && title === '') {
      setShouldSubmit(false);
      dispatch(
        areaActions[CREATE_TODO_STARTED](state, () => {
          setState({});
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, shouldSubmit, dispatch]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShouldSubmit(true);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="title"
          value={state.title || ''}
          onChange={onChange}
          placeholder="title"
        />
        <div style={{ display: 'flex' }}>
          <input
            type="text"
            value={state.confirmTitle || ''}
            name="confirmTitle"
            onChange={onChange}
            placeholder="confirm title"
          />
          <div>
            <div>{error.title}</div>
            <div>{error.confirmTitle}</div>
          </div>
        </div>
        <br />
        <button onClick={() => {}}>Submit</button>
        <select name="status" onChange={onChange} value={state.status || ''}>
          <option value="">Select one</option>
          <option value={ItemStatus.TODO}>TODO</option>
          <option value={ItemStatus.DOING}>DOING</option>
          <option value={ItemStatus.DONE}>DONE</option>
        </select>
        <div>{error.status}</div>
      </form>
    </div>
  );
};

export default FormItemUseState;
