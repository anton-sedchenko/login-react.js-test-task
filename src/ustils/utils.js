export const isUserLoggedIn = () => {
    const appSettings = JSON.parse(localStorage.getItem('appSettings'));

    return appSettings ? appSettings.isAuth : false;
}

export const HOME_PAGE_PATH = '/home';
export const CHAT_PAGE_PATH = '/chat';
export const SETTINGS_PAGE_PATH = '/settings';
