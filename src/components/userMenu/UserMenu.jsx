import React from 'react';
import './UserMenu.css';

const UserMenu = () => {
    const userMenuOptions = [
        {
            name: 'Profile',
            key: 'Profile'
        },
        {
            name: 'Photos',
            key: 'Photos'
        },
        {
            name: 'Settings',
            key: 'Settings'
        },
        {
            name: 'Edit',
            key: 'Edit'
        }
    ];

    return (
        <div className="user-menu-wrapper">
            <ul className="user-menu-list">
                {userMenuOptions.map((item) => {
                    return (
                        <li key={item.key} className="user-menu-list__item">{item.name}</li>
                    );
                })}
            </ul>
        </div>
    );
};

export default UserMenu;
