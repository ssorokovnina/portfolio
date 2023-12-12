function changeTheme() {
    const themeImage = document.querySelector('.theme__image');
    const changableElements = document.querySelectorAll('.black-theme');


    themeImage.addEventListener('click', (evt) => {
        
        changableElements.forEach( (item) => {
            item.classList.toggle('light-theme');
        })

        if (themeImage.classList.contains('light-theme')) {
            themeImage.src = './assets/svg/light-theme.svg';
            localStorage.setItem('theme', 'light');
        } else {
            themeImage.src = './assets/svg/black-theme.svg';
            localStorage.setItem('theme', 'black');
        }
    })
}

export default changeTheme;

