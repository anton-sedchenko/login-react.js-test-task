import React, { useEffect, useState } from 'react';
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

const SideBarWrapper = styled.div`
    width: ${({isSideBarWide}) => (isSideBarWide ? '300px' : '60px')};
    height: auto;
    transition: 350ms;
    border: 1px solid green;
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
    const [homePageLinkClass, setHomePageLinkClass] = useState('');
    const [chatPageLinkClass, setChatPageLinkClass] = useState('');
    const [settingsPageLinkClass, setSettingsPageLinkClass] = useState('');

    useEffect(() => {
        const currentPath = window.location.pathname;
        switch (currentPath) {
            case HOME_PAGE_PATH:
                setHomePageLinkClass('sidebar__page-link--active');
                setChatPageLinkClass('');
                setSettingsPageLinkClass('');
                break;
            case CHAT_PAGE_PATH:
                setHomePageLinkClass('');
                setChatPageLinkClass('sidebar__page-link--active');
                setSettingsPageLinkClass('');
                break;
            case SETTINGS_PAGE_PATH:
                setHomePageLinkClass('');
                setChatPageLinkClass('');
                setSettingsPageLinkClass('sidebar__page-link--active');
                break;
            default:
                setHomePageLinkClass('');
                setChatPageLinkClass('sidebar__page-link--active');
                setSettingsPageLinkClass('');
        }
    }, [window.location.pathname])

    return (
        <SideBarWrapper isSideBarWide={isSideBarWide}>
            <div className="sidebar__links-container">
                <Link to="/home" className={`sidebar__page-link ${homePageLinkClass}`}
                      onClick={() => {
                          setHomePageLinkClass('sidebar__page-link--active');
                          setChatPageLinkClass('');
                          setSettingsPageLinkClass('');
                      }}
                >
                    <SideBarLinkContent isSideBarWide={isSideBarWide}>
                        <HomeIcon />
                        {isSideBarWide && <span className="sidebar__page-link-text">Home</span>}
                    </SideBarLinkContent>
                </Link>
                <Link to="/chat" className={`sidebar__page-link ${chatPageLinkClass}`}
                      onClick={() => {
                          setHomePageLinkClass('');
                          setChatPageLinkClass('sidebar__page-link--active');
                          setSettingsPageLinkClass('');
                      }}
                >
                    <SideBarLinkContent isSideBarWide={isSideBarWide}>
                        <MessageIcon />
                        {isSideBarWide && <span className="sidebar__page-link-text">Chat</span>}
                    </SideBarLinkContent>
                </Link>
                <Link to="/settings" className={`sidebar__page-link ${settingsPageLinkClass}`}
                      onClick={() => {
                          setHomePageLinkClass('');
                          setChatPageLinkClass('');
                          setSettingsPageLinkClass('sidebar__page-link--active');
                      }}
                >
                    <SideBarLinkContent isSideBarWide={isSideBarWide}>
                        <SettingsIcon />
                        {isSideBarWide && <span className="sidebar__page-link-text">Settings</span>}
                    </SideBarLinkContent>
                </Link>
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
    );
};

export default SideBar;
