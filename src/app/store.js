import { legacy_createStore as createStore } from 'redux';
import { combineReducers } from 'redux';
import setInitReducer from '../reducers/setInit';
import  setGuessReducer  from '../reducers/guessNum'

const rootReducer = combineReducers({
  setNum: setInitReducer,
  guessNum: setGuessReducer
})

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
