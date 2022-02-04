const left = document.querySelector('.left');
const right = document.querySelector('.right');
const contairner = document.querySelector('.contairner');

left.addEventListener('mouseenter', () => contairner.classList.add('hover-left'));
left.addEventListener('mouseleave', () => contairner.classList.remove('hover-left'));

right.addEventListener('mouseenter', () => contairner.classList.add('hover-right'));
right.addEventListener('mouseleave', () => contairner.classList.remove('hover-right'));

