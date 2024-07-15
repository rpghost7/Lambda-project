
let change = document.querySelector('.bodyy');
let buttonPress = document.querySelector('.brightness-icon');
buttonPress.addEventListener('click', () => {
    if (document.querySelector('.body-class')) {
        change.classList.remove('body-class');
    }
    else {
        change.classList.add('body-class');
    }
});

let header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  
        if(window.scrollY>10){
            header.classList.add('header-scroll');
           
        }
        else{
            header.classList.remove('header-scroll');
            
        }
});