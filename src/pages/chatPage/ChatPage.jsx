import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logOut } from '../../store/authReducer';
import { useDispatch } from 'react-redux';
import './ChatPage.css';

const ChatPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className="chat-page__content-wrapper">
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
