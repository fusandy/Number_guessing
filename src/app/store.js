import { legacy_createStore as createStore } from 'redux';
import { combineReducers } from 'redux';
// import setNameReducer from '../reducers/setName';
// import setInitReducer from '../reducers/setInit';
// import setGuessReducer  from '../reducers/setRecord'
// import setRangeReducer from '../reducers/setRange';
// import setListReducer from '../reducers/setList';
import gameReducer from '../reducers/gameReducer'

// const rootReducer = combineReducers({
//   name: setNameReducer,
//   num: setInitReducer,
//   record: setGuessReducer,
//   range: setRangeReducer,
//   list: setListReducer
// })

export const store = createStore(
  gameReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
