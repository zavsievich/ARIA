function accordion() {
    const nona11y = document.querySelector('.js-non-a11y');
    const a11y = document.querySelector('.js-a11y');
    const itemsList = Array.from(document.querySelectorAll('.js-item'));
    const btnsList = Array.from(document.querySelectorAll('.js-btn'));
    const expandClass = 'is-expand';

    if(nona11y) {
        nona11yaccodrion();
    } else if(a11y) {
        a11yaccodrion();
    }

    function nona11yaccodrion () {
        btnsList.forEach(item => {
            item.addEventListener('click', function() {
                for(let i = 0; i < itemsList.length; i++) {
                    itemsList[i].classList.remove(expandClass);
                }

                let currentItem = item.closest('.js-item');
                currentItem.classList.add(expandClass);
            })
        })
    }

    function a11yaccodrion() {
        btnsList.forEach(item => {
            item.addEventListener('click', function() {
                for(let i = 0; i < itemsList.length; i++) {
                    itemsList[i].classList.remove(expandClass);
                }

                let currentItem = item.closest('.js-item');
                currentItem.classList.add(expandClass);

                item
            })
        })
    }
}

accordion();