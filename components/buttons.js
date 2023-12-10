const seasonBtns = document.querySelectorAll('.buttons .buttons__button_active');
const seasonImgs = document.querySelectorAll('.photos .photos__image');
let activeBtn = seasonBtns[3];

seasonBtns.forEach( (item) => {
    const season = item.innerText.toLowerCase();

    item.addEventListener('click', (evt) => {
        if (item.classList.contains('buttons__button_inactive')) {

            item.classList.remove('buttons__button_inactive');
            activeBtn.classList.add('buttons__button_inactive');
            activeBtn = item;


            seasonImgs.forEach( (photo, index) => {
                photo.src = `./assets/img/${season}-${index + 1}.jpg`;
            })
        }
    });
});


