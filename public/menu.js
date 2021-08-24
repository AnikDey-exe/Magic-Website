const arrow = document.querySelector('#arrow');
const menu = document.querySelector('#menu');
const up = document.querySelector('#up');
const down = document.querySelector('#down');

arrow.addEventListener('click', () => {
    if(menu.classList.contains('hidden')) {
        menu.classList.remove('hidden')
        up.classList.remove('hidden')
        down.classList.add('hidden')
    }
    else {
        menu.classList.add('hidden')
        up.classList.add('hidden')
        down.classList.remove('hidden')
    }
})