import React from 'react';
import './Header.css';
import { MenuOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';

const Header = () => {
    const userData = useSelector(state => state.currentUser);

    return (
        <header className="header">
            <div className="header__left-side-container">
                <div className="logo-wrapper">
                    <span className="header__logo">Logo</span>
                </div>
                <div className="burger-menu-wrapper">
                    <MenuOutlined />
                </div>
            </div>
            <div className="header__user-info-wrapper">
                <div className="user-avatar-wrapper">
                    {
                        userData.userAvatar
                        ? <img src={userData.userAvatar} className="user-avatar" alt="user avatar"/>
                        : null
                    }
                </div>
                {
                    userData.userName
                        ? <span className="user-name">{userData.userName}</span>
                        : null
                }
            </div>
        </header>
    );
};

export default Header;
