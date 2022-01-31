import React, {useEffect, useRef} from 'react';
import './SideBar.css';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import { logOut } from '../../store/authReducer';
import { useDispatch } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';

const SideBar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const homePageBtn = useRef(null);
    const chatPageBtn = useRef(null);
    const settingsPageBtn = useRef(null);

    return (
        <div className="sidebar-wrapper">
            <div className="sidebar__page-links-container">
                <div ref={homePageBtn} className="sidebar__page-link-wrapper">
                    <Link to="/home" className="footer__page-link">
                        <HomeIcon className="sidebar__page-link" />
                    </Link>
                </div>
                <div ref={chatPageBtn} className="sidebar__page-link-wrapper">
                    <Link to="/chat" className="footer__page-link">
                        <MessageIcon className="sidebar__page-link" />
                    </Link>
                </div>
                <div ref={settingsPageBtn} className="sidebar__page-link-wrapper">
                    <Link to="/settings" className="footer__page-link">
                        <SettingsIcon className="sidebar__page-link" />
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
