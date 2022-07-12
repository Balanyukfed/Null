let next = document.querySelector('.button_next');
let back = document.querySelector('.button_back');
let slider = document.querySelector('.slider');

let offset = 0;

next.addEventListener('click', moveRight);
back.addEventListener('click', moveLeft);

function moveRight(){
    offset += 342;
    if (offset > 342*2){
        next.style.opacity = '0';
        next.style.visibility = 'hidden';
    } 
    if (offset > 0){
        back.style.opacity = '1';
        back.style.visibility = 'visible';
    }
    slider.style.left = -offset + 'px';
}
function moveLeft(){
    offset -= 342;
    if (offset <= 0){
        back.style.opacity = '0';
        back.style.visibility = 'hidden';
    }
    if (offset <= 342*2){
        next.style.opacity = '1';
        next.style.visibility = 'visible';
    }
    slider.style.left = -offset + 'px';
}