let cbox = document.querySelectorAll('.checkbox');
const keys = {
    space: 32,
};

cbox.forEach(item => {
    item.addEventListener('click', function () {
        toggleStates(item);
    })

    item.addEventListener('keydown', function(e) {
        if(e == keys.space) {
            toggleStates(item);
        }
    })

    function toggleStates(el) {
        el.classList.toggle('check');
        if (el.classList.contains('check')) {
            el.setAttribute('aria-checked', true);
        } else {
            el.setAttribute('aria-checked', false);
        }
    }
})

