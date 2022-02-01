import React, {useEffect, useState} from 'react';
import './App.css';
import LoginPage from '../../pages/loginPage/LoginPage';
import { Routes } from 'react-router-dom';
import ChatPage from '../../pages/chatPage/ChatPage';
import HomePage from '../../pages/homePage/HomePage';
import SettingsPage from '../../pages/settingsPage/SettingsPage';
import { Navigate, Route } from 'react-router';
import Header from '../header/Header';
import { useSelector } from 'react-redux';
import SideBar from '../sideBar/SideBar';
import Footer from '../footer/Footer';

function App() {
    const isUserLoggedIn = useSelector(state => state.authReducer.isAuth);
    const [isAuth, setIsAuth] = useState(isUserLoggedIn);

    useEffect(() => {
        isUserLoggedIn ? setIsAuth(true) : setIsAuth(false);
    }, [isUserLoggedIn]);

    return (
        <div className="App">
            <Header />
            {isAuth && <SideBar />}
            <div className="main-content-wrapper">
                <main>
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
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default App;
