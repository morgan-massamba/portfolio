const closeBtn = document.querySelector('.close-btn')
const hamburgerBtn = document.querySelector('.hamburger')
const dropdownMenu = document.querySelector('.dropdown-menu')
const links = Array.from(document.querySelectorAll('.dropdown-link'));

hamburgerBtn.addEventListener('click', () => {
    dropdownMenu.classList.add('active')
})

closeBtn.addEventListener('click', () => {
    dropdownMenu.classList.remove('active')
})

links.forEach(link => {
    link.addEventListener('click', () => {
        dropdownMenu.classList.remove('active')
    })
})