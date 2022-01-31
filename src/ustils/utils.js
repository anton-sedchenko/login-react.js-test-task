export const isUserLoggedIn = () => {
    const appSettings = JSON.parse(localStorage.getItem('appSettings'));

    return appSettings ? appSettings.isAuth : false;
}
