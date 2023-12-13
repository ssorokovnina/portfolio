import { SETTINGS, SETTINGS_NAME } from '../assets/js/constants.js';

export function changeClassTheme(theme) {
    const themeImage = document.querySelector('.theme__image');
    const changableElements = document.querySelectorAll('.theme');

    themeImage.dataset.theme = themeImage.classList[2];

    changableElements.forEach( (item) => {
        if (!item.classList.contains(theme)) {
            item.classList.add(theme);

            themeImage.src = `../assets/svg/${theme}.svg`;

            item.classList.remove(themeImage.dataset.theme);
        }
    })
}

function changeTheme() {
    let dataAttr = document.querySelector('[data-theme]');

    dataAttr.addEventListener('click', (evt) => {
        const settingsData = localStorage.getItem(SETTINGS_NAME);

        if (!settingsData) {
            const newSettinsData = JSON.stringify({
                ...SETTINGS,
                theme: evt.target.dataset.theme,
            });
            localStorage.setItem(SETTINGS_NAME, newSettinsData);
            
            changeClassTheme(evt.target.dataset.theme);

            return;
        }
        
        const settings = JSON.parse(settingsData);
        const newSettinsData = JSON.stringify({
            ...settings,
            theme: evt.target.dataset.theme,
        });
        localStorage.setItem(SETTINGS_NAME, newSettinsData);
        
        changeClassTheme(evt.target.dataset.theme);
    })
}

export default changeTheme;

