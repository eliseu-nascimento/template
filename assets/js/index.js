'use strict'

const sectionContainers = document.querySelectorAll('.section__container')

const scrollAnimation = () => sectionContainers.forEach(sectionContainer => {
    const sectionTop = sectionContainer.offsetTop

        window.pageYOffset + 70 > sectionTop && sectionContainer.classList.add('move-up')
    }
)

window.addEventListener('scroll', scrollAnimation)