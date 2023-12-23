function changeSeasons() {
    const seasonBtns = document.querySelectorAll('.buttons .buttons__button_active');
    const seasonImgs = document.querySelectorAll('.photos .photos__image');

    seasonBtns.forEach( (item) => {

        item.addEventListener('click', (evt) => {
            const btn = evt.target;

            if (btn.classList.contains('buttons__button_inactive')) {

                seasonBtns.forEach( (item) => item.classList.add('buttons__button_inactive'));
                btn.classList.remove('buttons__button_inactive');

                seasonImgs.forEach( (photo, index) => {
                    photo.src = `../assets/img/${btn.dataset.season}-${index + 1}.jpg`;
                })
            }
        });
    });
}

export default changeSeasons;