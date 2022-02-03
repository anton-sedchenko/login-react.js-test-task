import React, { useState } from 'react';
import './Header.css';
import { MenuOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { changeSideBarState } from '../../store/sideBarReducer';
import UserMenu from '../userMenu/UserMenu';
import CaretUpOutlined from '@ant-design/icons/lib/icons/CaretUpOutlined';
import CaretDownOutlined from '@ant-design/icons/lib/icons/CaretDownOutlined';

const Header = () => {
    const userData = JSON.parse(localStorage.getItem('appSettings'))?.currentUser || {};
    const isUserLoggedIn = useSelector(state => state.authReducer.isAuth);
    const isSideBarWide = useSelector(state => state.sideBarReducer.isSideBarWide);
    const dispatch = useDispatch();
    const [isUserMenuShown, setIsUserMenuShown] = useState(false);

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
                        <MenuOutlined onClick={() => {
                            dispatch(changeSideBarState(!isSideBarWide));
                        }} />
                    </div>
                }
            </div>
            {
                isUserLoggedIn
                &&
                <div
                    className="header__user-info-wrapper"
                    onMouseEnter={() => setIsUserMenuShown(true)}
                    onMouseLeave={() => setIsUserMenuShown(false)}
                >
                    {isUserMenuShown && <UserMenu />}
                    <div className="header__user-info-container">
                        <img src={userData.userAvatar} className="user-avatar" alt="user avatar" />
                        <span className="user-name">{userData.userName}</span>
                    </div>
                    {isUserMenuShown ? <CaretUpOutlined /> : <CaretDownOutlined />}
                </div>
            }
        </header>
    );
};

export default Header;
