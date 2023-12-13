function changeClassTheme(theme) {
    const themeImage = document.querySelector('.theme__image');
    const changableElements = document.querySelectorAll('.theme');

    themeImage.dataset.theme = themeImage.classList[2];

    changableElements.forEach( (item) => {
        if (!item.classList.contains(theme)) {
            item.classList.add(theme);

            themeImage.src = `./assets/svg/${theme}.svg`;

            item.classList.remove(themeImage.dataset.theme);
            
        }
    })
}

function changeTheme() {
    let dataAttr = document.querySelector('[data-theme]');

    dataAttr.addEventListener('click', (evt) => {
        console.log('current data name ', evt.target.dataset.theme);
        changeClassTheme(evt.target.dataset.theme);
    })
}

export default changeTheme;

