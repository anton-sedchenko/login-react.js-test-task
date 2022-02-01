const defaultState = {
    isSideBarWide: false
}

const CHANGE_SIDEBAR_STATE = 'CHANGE_SIDEBAR_STATE';

export const sideBarReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_SIDEBAR_STATE:
            return {isSideBarWide: action.payload};
        default:
            return state;
    }
}

export const changeSideBarState = (isSideBarWide) => ({type: CHANGE_SIDEBAR_STATE, payload: isSideBarWide});
