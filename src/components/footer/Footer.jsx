import React from 'react';
import './Footer.css';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Footer = () => {
    const isUserLogin = useSelector(state => state.authReducer.isAuth);

    return (
        <footer className="footer">
            {
                isUserLogin
                &&
                <div className="footer__page-link-container">
                    <Link to="/home" className="footer__page-link">Home</Link>
                    <Link to="/chat" className="footer__page-link">Chat</Link>
                    <Link to="/settings" className="footer__page-link">Settings</Link>
                </div>
            }
            <span>&copy;Copyright 2020</span>
        </footer>
    );
};

export default Footer;
