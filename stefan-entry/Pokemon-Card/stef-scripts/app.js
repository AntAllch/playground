const card = document.querySelector('.card');
const reference = document.querySelector('.reference');
const shimmer = document.querySelector('.shimmer');
const animate = document.querySelectorAll('.animate');

const rotate = document.querySelector('.rotate');
const halfRotation = document.querySelector('.half-rotation');
const shiny = document.querySelector('.shiny');
const firstEdition = document.querySelector('.first-edition');
const firstEditionIcon = document.querySelector('.pokemon-attributes img');

const buttons = document.querySelectorAll('button');

document.addEventListener('DOMContentLoaded', () => {   
    
    document.documentElement.classList.add('show');
    
    setTimeout(() => {
        animate.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('revealed');
                console.log(item);
            }, index * 200)
        })
    }, 500)

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
