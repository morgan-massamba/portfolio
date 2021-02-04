const closeBtn = document.querySelector('.close-btn')
const hamburgerBtn = document.querySelector('.hamburger')
const dropdownMenu = document.querySelector('.dropdown-menu')

hamburgerBtn.addEventListener('click', () => {
    dropdownMenu.classList.add('active')
})

closeBtn.addEventListener('click', () => {
    dropdownMenu.classList.remove('active')
})