import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import areaActions from '../state-management/actions';
// import { FIND_TODOS_STARTED } from '../state-management/constants';
import FormItemUseState from '../components/FormItemUseState';
import { Helmet } from 'react-helmet';

const List = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(areaActions[FIND_TODOS_STARTED]());
  }, [dispatch]);
  return (
    <div>
      <Helmet>
        <title>My TodoList</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <FormItemUseState />
    </div>
  );
};

export default List;
