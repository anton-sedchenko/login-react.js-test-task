import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import { isUserLoggedIn } from '../ustils/utils';

const defaultState = {
        currentUser: {},
        isAuth: isUserLoggedIn()
}

const SET_USER = 'SET_USER';
const LOG_OUT = 'LOG_OUT';

const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_USER:
            const appSettings = {...JSON.parse(localStorage.getItem('appSettings')), currentUser: action.currentUser, isAuth: true};
            localStorage.setItem('appSettings', JSON.stringify(appSettings));

            return appSettings;
        case LOG_OUT:
            const newState = {...defaultState, isAuth: false};
            localStorage.setItem('appSettings', JSON.stringify(newState));

            return newState;
        default:
            return state;
    }
}

export const store = createStore(authReducer, composeWithDevTools(applyMiddleware(thunk)));

export const setUser = (currentUser) => ({type: SET_USER, currentUser});
export const logOut = () => ({type: LOG_OUT});
