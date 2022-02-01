import React, {useEffect, useRef, useState} from 'react';
import './SideBar.css';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import { logOut } from '../../store/authReducer';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import { CHAT_PAGE_PATH, HOME_PAGE_PATH, SETTINGS_PAGE_PATH } from '../../ustils/utils';

const SideBar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
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
        <div className="sidebar-wrapper">
            <div className="sidebar__page-links-container">
                <div className="sidebar__page-link-wrapper">
                    <Link to="/home" className={`sidebar__page-link ${homePageLinkClass}`}
                        onClick={() => {
                            setHomePageLinkClass('sidebar__page-link--active');
                            setChatPageLinkClass('');
                            setSettingsPageLinkClass('');
                        }}
                    >
                        <HomeIcon className="sidebar__page-icon" />
                    </Link>
                </div>
                <div className="sidebar__page-link-wrapper">
                    <Link to="/chat" className={`sidebar__page-link ${chatPageLinkClass}`}
                        onClick={() => {
                            setHomePageLinkClass('');
                            setChatPageLinkClass('sidebar__page-link--active');
                            setSettingsPageLinkClass('');
                        }}
                    >
                        <MessageIcon className="sidebar__page-icon" />
                    </Link>
                </div>
                <div className="sidebar__page-link-wrapper">
                    <Link to="/settings" className={`sidebar__page-link ${settingsPageLinkClass}`}
                        onClick={() => {
                            setHomePageLinkClass('');
                            setChatPageLinkClass('');
                            setSettingsPageLinkClass('sidebar__page-link--active');
                        }}
                    >
                        <SettingsIcon className="sidebar__page-icon" />
                    </Link>
                </div>
            </div>
            <div className="sidebar__logout-container">
                <MeetingRoomIcon
                    onClick={() => {
                        dispatch(logOut());
                        navigate('/login');
                    }}
                />
            </div>
        </div>
    );
};

export default SideBar;
