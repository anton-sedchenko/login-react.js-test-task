import React, {useEffect, useState} from 'react';
import './App.css';
import LoginPage from '../../pages/LoginPage';
import { Routes } from 'react-router-dom';
import ChatPage from "../../pages/ChatPage";
import HomePage from "../../pages/HomePage";
import SettingsPage from "../../pages/SettingsPage";
import {Navigate, Route} from "react-router";
import {useSelector} from "react-redux";

function App() {
    const [isAuth, setIsAuth] = useState(null);

    useEffect(() => {
        const isUserLogin = JSON.parse(localStorage.getItem('appSettings')).isAuth;
        isUserLogin ? setIsAuth(true) : setIsAuth(false);
    });

    return (
        <div className="App">
            <header className="App-header">
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
            </header>
        </div>
    );
}

export default App;
