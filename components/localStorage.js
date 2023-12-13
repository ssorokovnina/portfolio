import { SETTINGS_NAME } from '../assets/js/constants.js';
import { getTranslate } from './changeLang.js';
import changeTheme from './changeTheme.js';

// let lang = 'en';
// let theme = 'black';

// function setLocalStorage() {
//     localStorage.setItem('lang', lang);
//     localStorage.setItem('theme', theme);
// }

// window.addEventListener("beforeunload", setLocalStorage);

function setSettings() {
    const settingsData = localStorage.getItem(SETTINGS_NAME);

    if (!settingsData) return;

    const settings = JSON.parse(settingsData);
    getTranslate(settings.lang);
    

    // if (localStorage.getItem("lang")) {
    //     const lang = localStorage.getItem("lang");
    //     getTranslate(lang);
    // }
    // if (localStorage.getItem("theme")) {
    //     theme = localStorage.getItem("theme");
    //     changeTheme();
    // }
}

window.addEventListener("load", setSettings);
