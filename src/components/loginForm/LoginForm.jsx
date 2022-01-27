import React from 'react';
import './LoginForm.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/user';

const LoginForm = () => {
    const dispatch = useDispatch();
    const {handleSubmit, handleChange, values, touched, errors, handleBlur} = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email().required('Email is required'),
            password: Yup.string().min(5, 'Password should be longer than 5 characters').required('Password is required'),
        }),
        onSubmit: ({email, password}) => {
            dispatch(login({email, password}));
        }
    });

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <h1>Authorization</h1>
            {touched.email && errors.email
                ? <div style={{color: 'red'}}>{errors.email}</div>
                : null
            }
            <input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className="login-form__input"
                type="email"
                name="email"
                placeholder="Enter your email..."
            />
            {touched.password && errors.password
                ? <div style={{color: 'red'}}>{errors.password}</div>
                : null
            }
            <input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                className="login-form__input"
                type="password"
                name="password"
                placeholder="Enter your password..."
            />
            <button type="submit" className="login-form__submit-btn">Login</button>
        </form>
    );
};

export default LoginForm;
