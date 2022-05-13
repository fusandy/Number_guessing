import { legacy_createStore as createStore } from 'redux';
import { combineReducers } from 'redux';
import setNameReducer from '../reducers/setName';
import setInitReducer from '../reducers/setInit';
import setGuessReducer  from '../reducers/setRecord'
import setRangeReducer from '../reducers/setRange';
import setListReducer from '../reducers/setList';

const rootReducer = combineReducers({
  setName: setNameReducer,
  setNum: setInitReducer,
  setRecord: setGuessReducer,
  setRange: setRangeReducer,
  setList: setListReducer
})

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
