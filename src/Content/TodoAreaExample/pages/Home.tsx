import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import areaActions from '../state-management/actions';
// import { FIND_TODOS_STARTED } from '../state-management/constants';
import FormItemUseState from '../components/FormItemUseState';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(areaActions[FIND_TODOS_STARTED]());
  }, [dispatch]);
  return (
    <div>
      <FormItemUseState />
    </div>
  );
};

export default Home;
