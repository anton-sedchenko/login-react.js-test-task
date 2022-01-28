import React, {useEffect, useState} from 'react';
import './App.css';
import LoginPage from '../../pages/loginPage/LoginPage';
import { Routes } from 'react-router-dom';
import ChatPage from '../../pages/chatPage/ChatPage';
import HomePage from '../../pages/homePage/HomePage';
import SettingsPage from '../../pages/settingsPage/SettingsPage';
import { Navigate, Route } from 'react-router';
import Header from '../header/Header';

function App() {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        const isUserLogin = JSON.parse(localStorage.getItem('appSettings')).isAuth;
        isUserLogin ? setIsAuth(true) : setIsAuth(false);
    });

    return (
        <div className="App">
            <Header />
            <Routes>
                {
                    isAuth
                    ?
                    <>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/chat" element={<ChatPage />} />
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/settings" element={<SettingsPage />} />
                    </>
                    :
                    <Route path="/login" element={<LoginPage />} />
                }
                <Route path="*" element={<Navigate to={isAuth ? "/chat" : "/login"} />} />
            </Routes>
        </div>
    );
}

export default App;
