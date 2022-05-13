import { legacy_createStore as createStore } from 'redux';
import { combineReducers } from 'redux';
import setInitReducer from '../reducers/setInit';
import  setGuessReducer  from '../reducers/guessNum'
import setRangeReducer from '../reducers/setRange';

const rootReducer = combineReducers({
  setNum: setInitReducer,
  setRecord: setGuessReducer,
  setRange : setRangeReducer
})

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
