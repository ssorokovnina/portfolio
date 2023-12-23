import './components/localStorage.js';
import changeSeasons from './components/changeSeasons.js';
import changeLang from './components/changeLang.js';
import changeTheme from './components/changeTheme.js';

window.addEventListener('DOMContentLoaded', () => {
    changeSeasons();
    changeLang();
    changeTheme();
});