import { applyMiddleware, createStore, combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { sideBarReducer } from './sideBarReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    authReducer: authReducer,
    sideBarReducer: sideBarReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
