import createSagaMiddleware from 'redux-saga';
import loggerMiddleware from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootStateController';
import rootSaga from './rootEffectController';

const getCustomStore = () => {
  // config middlewares
  const sagaMiddleware = createSagaMiddleware();
  const middlewares: Array<any> = [sagaMiddleware];
  if (process.env.NODE_ENV === 'development') {
    middlewares.push(loggerMiddleware);
  }
  // main
  const store = createStore(rootReducer, applyMiddleware(...middlewares));
  sagaMiddleware.run(rootSaga);
  return store;
};

const store = getCustomStore();

export default store;
