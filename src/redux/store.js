// src/redux/store.js
import { createStore, combineReducers } from 'redux';
import formReducer from './formReducer';
import dictionaryReducer from './dictionaryReducer';

const rootReducer = combineReducers({
  form: formReducer,
  dictionary: dictionaryReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
    