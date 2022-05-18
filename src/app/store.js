import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import { combineReducers } from 'redux';
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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(
  gameReducer,
  enhancer
);
