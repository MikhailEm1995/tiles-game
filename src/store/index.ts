import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { identity } from 'ramda'

import rootReducer from './rootReducer';
import { WindowWithReduxDevTools } from './types';

import { epics as networkEpics } from '../entities/network';
import { epics as scenarioEpics } from '../entities/scenario';
import { epics as mapEpics } from '../entities/map';
import { epics as resultEpics } from '../entities/result';

const windowWithReduxDevTools = window as WindowWithReduxDevTools;
const devTools = windowWithReduxDevTools.__REDUX_DEVTOOLS_EXTENSION__
  ? windowWithReduxDevTools.__REDUX_DEVTOOLS_EXTENSION__()
  : identity;

const epicMiddleware = createEpicMiddleware();
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(epicMiddleware),
    devTools,
  ),
);

epicMiddleware.run(combineEpics<any>(
  ...networkEpics,
  ...scenarioEpics,
  ...mapEpics,
  ...resultEpics,
));

export default store;
