import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logOut } from '../store/authReducer';
import { useDispatch } from 'react-redux';

const ChatPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div>
            <h1>Chat page</h1>
            <Link to="/home">Home</Link>
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

export default ChatPage;
