import React, {useEffect, useState} from 'react';
import LoginForm from '../components/loginForm/LoginForm';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../store/authReducer';
import {useDispatch, useSelector} from 'react-redux';

const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuth = useSelector(state => {
        console.log(state);
        // return state.isAuth;
        return {};
    })

    // useEffect(() => {
    //     isAuth && navigate('/chat');
    // }, [isAuth]);

    return (
        <div>
            <LoginForm />
            {isAuth ? `You are logged in` : `You are logged out`}
            <div>
                <button
                    onClick={() => {
                        dispatch(logOut());
                        navigate('/login');
                    }}
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default LoginPage;
