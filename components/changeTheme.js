function changeTheme() {
    const changerTheme = document.querySelector('.theme');
    const changableElements = document.querySelectorAll('.black-theme');


    changerTheme.addEventListener('click', (evt) => {
        const themeImage = document.querySelector('.theme__image');

        changableElements.forEach( (item) => {
            item.classList.toggle('light-theme');
        })

        if (themeImage.classList.contains('light-theme')) {
            themeImage.src = './assets/svg/light-theme.svg';
        } else {
            themeImage.src = './assets/svg/black-theme.svg';
        }
    })
}

export default changeTheme;

