import { setUser } from '../store/authReducer';

const BD = [
    {
        email: 'test@gmail.com',
        password: 'kilroyWasHere',
        userAvatar: 'https://i.pinimg.com/564x/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg',
        userName: 'James Kilroy'
    },
    {
        email: 'test2@gmail.com',
        password: 'neverGiveUp',
        userAvatar: 'https://c.radikal.ru/c34/2202/cf/40409aba2d41.jpg',
        userName: 'Elon Musk'
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
