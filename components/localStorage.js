import { SETTINGS_NAME } from '../assets/js/constants.js';
import { getTranslate } from './changeLang.js';
import { changeClassTheme } from './changeTheme.js';

function setSettings() {
    const settingsData = localStorage.getItem(SETTINGS_NAME);

    if (!settingsData) return;

    const settings = JSON.parse(settingsData);
    getTranslate(settings.lang);
    if (settings.lang === 'ru') {
        document.querySelector('.lang__en').classList.remove('active');
        document.querySelector('.lang__ru').classList.add('active');
    }

    changeClassTheme(settings.theme);
}

window.addEventListener("load", setSettings);
