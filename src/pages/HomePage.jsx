import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logOut } from '../store/authReducer';
import { useDispatch } from 'react-redux';

const HomePage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div>
            <h1>Home page</h1>
            <Link to="/chat">Chat</Link>
            <Link to="/settings">Settings</Link>
            <button
                onClick={() => {
                    dispatch(logOut());
                    navigate('/login');
                }}
            >
                Logout
            </button>
        </div>
    );
};

export default HomePage;
