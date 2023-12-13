import { SETTINGS_NAME } from '../assets/js/constants.js';
import { getTranslate } from './changeLang.js';
import { changeClassTheme } from './changeTheme.js';

function setSettings() {
    const settingsData = localStorage.getItem(SETTINGS_NAME);

    if (!settingsData) return;

    const settings = JSON.parse(settingsData);
    getTranslate(settings.lang);
    if (settings.theme != 'black-theme') {
        changeClassTheme(settings.theme);
    }
}

window.addEventListener("load", setSettings);
