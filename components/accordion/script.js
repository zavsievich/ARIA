function accordion() {
    // const nona11y = document.querySelector('.js-non-a11y');
    const a11y = document.querySelector('.js-a11y');
    const btnsList = Array.from(document.querySelectorAll('.js-btn'));
    const itemsList = Array.from(document.querySelectorAll('.js-item'));
    const expandClass = 'is-expand';

    btnsList.forEach(item => {
        item.addEventListener('click', function () {
            for (let i = 0; i < itemsList.length; i++) {
                itemsList[i].classList.remove(expandClass);
            }

            let currentItem = item.closest('.js-item');
            currentItem.classList.add(expandClass);

            if (a11y) {
                for (let i = 0; i < btnsList.length; i++) {
                    btnsList[i].setAttribute('aria-expanded', false);
                    btnsList[i].setAttribute('aria-disabled', false);
                }
                item.setAttribute('aria-expanded', true);
                item.setAttribute('aria-disabled', true);
            }
        })
    })

}

accordion();