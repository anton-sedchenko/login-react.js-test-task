import React from 'react';
import './Header.css';
import { MenuOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { changeSideBarState } from '../../store/sideBarReducer';

const Header = () => {
    const userData = JSON.parse(localStorage.getItem('appSettings')).currentUser;
    const isUserLoggedIn = useSelector(state => state.authReducer.isAuth);
    const isSideBarWide = useSelector(state => state.sideBarReducer.isSideBarWide);
    const dispatch = useDispatch();

    return (
        <header className="header">
            <div className="header__left-side-container">
                <div className="logo-wrapper">
                    <span className="header__logo">Logo</span>
                </div>
                {
                    isUserLoggedIn
                    &&
                    <div className="burger-menu-wrapper">
                        <MenuOutlined onClick={() => dispatch(changeSideBarState(!isSideBarWide))} />
                    </div>
                }
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
