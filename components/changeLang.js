import i18Obj from "./translate.js";

function getTranslate(lang) {
    const dataAttr = document.querySelectorAll('[data-i18n]');

    dataAttr.forEach( (item) => {
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
    let activeBtn = langBtns[0];

    langBtns.forEach( (item) => {
        item.addEventListener('click', (env) => {
            if (!item.classList.contains('active')) {

                item.classList.add('active');
                activeBtn.classList.remove('active');
                activeBtn = item;
                localStorage.setItem('lang', activeBtn.innerText);

                getTranslate(item.innerText);
            }
        })
    })
}

export default changeLang;