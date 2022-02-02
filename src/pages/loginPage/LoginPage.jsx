import React, { useEffect } from 'react';
import './LoginPage.css';
import LoginForm from '../../components/loginForm/LoginForm';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const LoginPage = () => {
    const navigate = useNavigate();
    const isAuth = useSelector(state => state.authReducer.isAuth);
    const isUserNotFound = useSelector(state => state.authReducer.isUserNotFound);

    useEffect(() => {
        isAuth && navigate('/chat');
    }, [isAuth]);

    return (
        <div className="login-page__content-wrapper">
            <div className="auth-form-wrapper">
                <div className="auth-form__error-container">
                    {isUserNotFound && <span>User not found</span>}
                </div>
                <LoginForm />
                <div style={{textAlign: 'center', paddingTop: '40px'}}>
                    <h3>Credentials:</h3>
                    <p>login: test@gmail.com</p>
                    <p>pass: kilroyWasHere</p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
