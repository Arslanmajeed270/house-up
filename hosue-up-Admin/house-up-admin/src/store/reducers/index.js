
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

//importing redux
import pageReducer from './pageReducer';
import userReducers from './userReducers'
import authReducer from './authReducer';
import propertyReducer from './propertyReducer';
import accountReducer from './accountReducer';
import vendorReducer from './vendorReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  page: pageReducer,
  user: userReducers,
  auth : authReducer,
  property: propertyReducer,
  account: accountReducer,
  vendor: vendorReducer,
});

//const store = createStore(burgerBuilderReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));