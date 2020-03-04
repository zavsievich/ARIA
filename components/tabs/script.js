function tabs() {
    const a11y = document.querySelector('.js-a11y');
    // const nona11y = document.querySelector('.js-non-a11y');
    const btnsList = Array.from(document.querySelectorAll('.js-btn'));
    const itemsList = Array.from(document.querySelectorAll('.js-item'));
    const expandClass = 'is-expand';
    const activeClass = 'is-active';
    const keys = {
        left: 37,
        right: 39,
    };

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

            if (a11y) {
                item.setAttribute('aria-selected', true);
                item.setAttribute('tabindex', 0);
            }
        })
    })

    if (a11y) {
        btnsList.forEach(item => {
            item.addEventListener('keydown', function (e) {
                if (e.keyCode == keys.left) {
                    moveToPrev(e);
                } else if (e.keyCode == keys.right) {
                    moveToNext(e);
                }
            })
        })

        function moveToPrev(e) {
            let target = e.target;
            let currentIndex = btnsList.indexOf(target);

            if (btnsList[currentIndex - 1]) {
                btnsList[currentIndex - 1].focus();
            } else {
                focusLastTab();
            }
        }

        function moveToNext(e) {
            let target = e.target;
            let currentIndex = btnsList.indexOf(target);

            if (btnsList[currentIndex + 1]) {
                btnsList[currentIndex + 1].focus();
            } else {
                focusFisrtTab();
            }
        }

        function focusLastTab() {
            const lastTab = btnsList.length - 1;
            btnsList[lastTab].focus();
        }

        function focusFisrtTab() {
            const firstTab = 0;
            btnsList[firstTab].focus();
        }
    }
}

tabs();