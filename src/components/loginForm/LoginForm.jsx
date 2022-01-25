import React from 'react';
import './LoginForm.css';

const LoginForm = () => {
    return (
        <div className="login-form-wrapper">
            <h1>Authorization</h1>
            <input className="login-form__input" type="email" name="email" placeholder="Enter your email..." />
            <input className="login-form__input" type="password" name="password" placeholder="Enter your password..." />
            <button type="submit" className="login-form__submit-btn">Login</button>
        </div>
    );
};

export default LoginForm;