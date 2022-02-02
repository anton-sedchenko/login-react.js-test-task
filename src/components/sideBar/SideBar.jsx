import React from 'react';
import './SideBar.css';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import { logOut } from '../../store/authReducer';
import { changeSideBarState } from '../../store/sideBarReducer';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import { CHAT_PAGE_PATH, HOME_PAGE_PATH, SETTINGS_PAGE_PATH } from '../../ustils/utils';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

const SideBarWrapper = styled.div`
    width: ${({isSideBarWide, isMobileScreen}) => {
        if (isMobileScreen) {
            return isSideBarWide && '100%';
        }
        return isSideBarWide ? '300px' : '60px';
    }};
    height: 100%;
    transition: 350ms;
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const SideBarLinkContent = styled.div`
    display: flex;
    justify-content: ${({isSideBarWide}) => (isSideBarWide ? 'flex-start' : 'center')};
    align-items: center;
    padding-left: ${({isSideBarWide}) => (isSideBarWide ? '22px' : '')};
    height: 60px;
    font-size: 16px;
    text-decoration: none;
`;

const SideBar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isSideBarWide = useSelector(state => state.sideBarReducer.isSideBarWide);
    const currentPath = window.location.pathname;
    const navLinks = [
        {
            href: HOME_PAGE_PATH,
            icon: <HomeIcon />,
            linkName: 'Home',
            key: 'Home'
        },
        {
            href: CHAT_PAGE_PATH,
            icon: <MessageIcon />,
            linkName: 'Chat',
            key: 'Chat'
        },
        {
            href: SETTINGS_PAGE_PATH,
            icon: <SettingsIcon />,
            linkName: 'Settings',
            key: 'Settings'
        }
    ];
    const isMobileScreen = useMediaQuery({query: '(max-width: 479px)'});
    const userData = JSON.parse(localStorage.getItem('appSettings'))?.currentUser || {};

    return (
        <div className={isMobileScreen && isSideBarWide ? 'sidebar sidebar--active' : 'sidebar'}>
            <SideBarWrapper isSideBarWide={isSideBarWide} isMobileScreen={isMobileScreen}>
                <div className="sidebar__links-container">
                    {
                        isMobileScreen && isSideBarWide
                        ?
                        <div className="user-info-container">
                            <img src={userData.userAvatar} className="user-avatar" alt="user avatar"/>
                            <span className="user-name">{userData.userName}</span>
                        </div>
                        :
                        null
                    }
                    {navLinks.map((item) => {
                        return (
                            <Link
                                key={item.key}
                                to={item.href}
                                className={
                                    currentPath === item.href
                                    ? 'sidebar__page-link sidebar__page-link--active'
                                    : 'sidebar__page-link'
                                }
                            >
                                <SideBarLinkContent isSideBarWide={isSideBarWide}>
                                    {item.icon}
                                    {isSideBarWide && <span className="sidebar__page-link-text">{item.linkName}</span>}
                                </SideBarLinkContent>
                            </Link>
                        );
                    })}
                </div>
                <div className="sidebar__logout-container">
                    <SideBarLinkContent
                        isSideBarWide={isSideBarWide}
                        onClick={() => {
                            dispatch(changeSideBarState(!isSideBarWide));
                            dispatch(logOut());
                            navigate('/login');
                        }}
                    >
                        <MeetingRoomIcon />
                        {isSideBarWide && <span className="sidebar__page-link-text">Logout</span>}
                    </SideBarLinkContent>
                </div>
            </SideBarWrapper>
        </div>
    );
};

export default SideBar;
