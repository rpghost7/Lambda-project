
let changes = document.querySelector('.bodyy');
let buttonPresses = document.querySelector('.brightness-icon');
buttonPresses.addEventListener('click', () => {
    if (document.querySelector('.body-class')) {
        changes.classList.remove('body-class');
    }
    else {
        changes.classList.add('body-class');
    }
});

let headers = document.querySelector('.header');

window.addEventListener('scroll', () => {

    if (window.scrollY > 10) {
        headers.classList.add('header-scroll');

    }
    else {
        headers.classList.remove('header-scroll');

    }
});
