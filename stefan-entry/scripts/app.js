const card = document.querySelector('.card');
const shimmer = document.querySelector('.shimmer');

const rotate = document.querySelector('.rotate');
const halfRotation = document.querySelector('.half-rotation');
const shiny = document.querySelector('.shiny');
const firstEdition = document.querySelector('.first-edition');
const firstEditionIcon = document.querySelector('.pokemon-attributes img');

const buttons = document.querySelectorAll('button');

document.addEventListener('DOMContentLoaded', () => {    
    rotate.addEventListener('click', () => {
        card.classList.toggle('rotated');
        shimmer.classList.toggle('rotated');
    });
    
    halfRotation.addEventListener('click', () => {
        card.classList.toggle('half-rotation');
        shimmer.classList.toggle('rotated');
    });
    
    shiny.addEventListener('click', () => {
        shimmer.classList.toggle('rotated');
    });
    
    firstEdition.addEventListener('click', () => {
        firstEditionIcon.classList.toggle('reveal');
    });
    
    for(const button of buttons) {
        button.addEventListener('click', () => {
            button.classList.toggle('active');
        });
    }
});
