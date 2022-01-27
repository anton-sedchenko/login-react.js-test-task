import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logOut } from '../store/authReducer';
import { useDispatch } from 'react-redux';

const SettingsPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
            <div>
                <h1>Settings page</h1>
                <Link to="/home">Home</Link>
                <Link to="/chat">Chat</Link>
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

export default SettingsPage;
