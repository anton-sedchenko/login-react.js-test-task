import { setUser } from '../store/authReducer';

const BD = [
    {
        email: 'test@gmail.com',
        password: 'leroyWasHere'
    }
]

export const login = (loginUserCreds) => {
    return dispatch => {
        let currentUser = {};
        try {
            const response = () => {
                const currentUser = BD.find((userInBd) => {
                    return userInBd.email === loginUserCreds.email && userInBd.password === loginUserCreds.password;
                });

                return currentUser;
            };
            currentUser = response();
            currentUser ? dispatch(setUser(currentUser)) : alert('User not found');
        } catch(e) {
            console.log(e);
        }
    }
}
