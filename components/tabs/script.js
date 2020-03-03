function tabs() {
    const a11y = document.querySelector('.js-a11y');
    const nona11y = document.querySelector('.js-non-a11y');
    const btnsList = Array.from(document.querySelectorAll('.js-btn'));
    const itemsList = Array.from(document.querySelectorAll('.js-item'));
    const expandClass = 'is-expand';
    const activeClass = 'is-active';

    // if (nona11y) {
    //     nona11yTabs();
    // } else if (a11y) {
    //     allyTabs();
    // }


    btnsList.forEach(item => {
        item.addEventListener('click', function () {
            for (let i = 0; i < btnsList.length; i++) {
                btnsList[i].classList.remove(activeClass);
                itemsList[i].classList.remove(expandClass);

                if (a11y) {
                    btnsList[i].setAttribute('aria-selected', false);
                    btnsList[i].setAttribute('tabindex', -1);
                }
            }

            let pressTab = item.getAttribute('data-tab');
            let currentItem = document.querySelector(`[data-item="${pressTab}"]`);

            item.classList.add(activeClass);
            currentItem.classList.add(expandClass);

            if(a11y) {
                item.setAttribute('aria-selected', true);
                item.setAttribute('tabindex', 0);
            }
        })
    })


    // function allyTabs() {
    //     btnsList.forEach(item => {
    //         item.addEventListener('click', function () {
    //             let pressTab = item.getAttribute('data-tab');

    //             for (let i = 0; i < btnsList.length; i++) {
    //                 btnsList[i].classList.remove(activeClass);
    //                 btnsList[i].setAttribute('aria-selected', false);
    //                 btnsList[i].setAttribute('tabindex', -1);
    //             }
    //             item.classList.add(activeClass);
    //             item.setAttribute('aria-selected', true);
    //             item.setAttribute('tabindex', 0);


    //         })
    //     })
    // }
}

tabs();