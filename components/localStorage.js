import getTranslate from './changeLang.js';
import changeTheme from './changeTheme.js';

let lang = 'en';
let theme = 'black';

function setLocalStorage() {
    localStorage.setItem('lang', lang);
    localStorage.setItem('theme', theme);
}

window.addEventListener("beforeunload", setLocalStorage);

function getLocalStorage() {
    if (localStorage.getItem("lang")) {
    const lang = localStorage.getItem("lang");
    getTranslate(lang);
    }
    // if (localStorage.getItem("theme")) {
    //     theme = localStorage.getItem("theme");
    //     changeTheme();
    // }
}

window.addEventListener("load", getLocalStorage);


