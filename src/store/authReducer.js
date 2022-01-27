import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';

const defaultState = {
        currentUser: {},
        isAuth: false
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
            localStorage.setItem('appSettings', JSON.stringify({...defaultState}));

            return defaultState;
    }
}

export const store = createStore(authReducer, composeWithDevTools(applyMiddleware(thunk)));

export const setUser = (currentUser) => ({type: SET_USER, currentUser});
export const logOut = () => ({type: LOG_OUT});
