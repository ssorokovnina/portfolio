import i18Obj from "./vocabulary.js";
// import { SETTINGS, SETTINGS_NAME } from '../assets/js/constants.js';

export function getTranslate(lang) {
    const dataAttrs = document.querySelectorAll('[data-i18n]');

    dataAttrs.forEach( (item) => {
        if (i18Obj[lang][item.dataset.i18n]) {
            if (item.placeholder) {
                item.placeholder = i18Obj[lang][item.dataset.i18n];
                item.textContent = '';
            } else {
                item.textContent = i18Obj[lang][item.dataset.i18n];
            }
        }
    });
}


function changeLang() {
    const langBtns = [document.querySelector('.lang__en'), document.querySelector('.lang__ru')];
    // const settingsData = localStorage.getItem(SETTINGS_NAME);

    langBtns.forEach((item) => {
        item.addEventListener('click', (evt) => {
            const btn = evt.target;

            if (!btn.classList.contains('active')) {
                langBtns.forEach((el) => el.classList.remove('active'));
                btn.classList.add('active');

                getTranslate(btn.innerText);
            }
        })
    })
}

export default changeLang;


// if (!settingsData) {
//     const newSettinsData = JSON.stringify({
//         ...SETTINGS,
//         lang: activeBtn.innerText,
//     });
//     localStorage.setItem(SETTINGS_NAME, newSettinsData);
    
//     getTranslate(item.innerText);

//     return;
// }

// const settings = JSON.parse(settingsData);
// const newSettinsData = JSON.stringify({
//     ...settings,
//     lang: item.innerText,
// });
// localStorage.setItem(SETTINGS_NAME, newSettinsData);

// getTranslate(item.innerText);