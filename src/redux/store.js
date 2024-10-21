import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducers';

// Crear el store sin Firebase ni Firestore
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk)
  )
);

export default store;
