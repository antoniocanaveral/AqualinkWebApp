import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducers';


const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk)
  )
);

export default store;
