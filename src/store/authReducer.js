import { isUserLoggedIn } from '../ustils/utils';

const defaultState = {
    currentUser: {},
    isAuth: isUserLoggedIn(),
    isUserNotFound: false
}

const SET_USER = 'SET_USER';
const LOG_OUT = 'LOG_OUT';
const SET_ERROR_USER_NOT_FOUND = 'SET_ERROR_USER_NOT_FOUND';
const UNSET_ERROR_USER_NOT_FOUND = 'UNSET_ERROR_USER_NOT_FOUND';

export const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_USER:
            const appSettings = {
                ...JSON.parse(localStorage.getItem('appSettings')),
                currentUser: {userName: action.currentUser.userName, userAvatar: action.currentUser.userAvatar},
                isAuth: true
            };
            localStorage.setItem('appSettings', JSON.stringify(appSettings));

            return appSettings;
        case SET_ERROR_USER_NOT_FOUND:
            return {...state, isUserNotFound: true}
        case UNSET_ERROR_USER_NOT_FOUND:
            return {...state, isUserNotFound: false}
        case LOG_OUT:
            const newState = {...defaultState, isAuth: false};
            localStorage.setItem('appSettings', JSON.stringify(newState));

            return newState;
        default:
            return state;
    }
}

export const setUser = (currentUser) => ({type: SET_USER, currentUser});
export const setErrorUserNotFound = () => ({type: SET_ERROR_USER_NOT_FOUND});
export const unsetErrorUserNotFound = () => ({type: UNSET_ERROR_USER_NOT_FOUND});
export const logOut = () => ({type: LOG_OUT});
