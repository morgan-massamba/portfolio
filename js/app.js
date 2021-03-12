//GSAP ANIMATION
gsap.timeline()
    .to('.block-item', 1.5, {
        scaleY: 0.3,
        ease: Expo.easeInOut,
        stagger: 0.1,
    })
    .to('.block-item', 1.5, {
        width: '10px',
        ease: Expo.easeInOut,
    })
    .to('.block-item', 1.5, {
        y: '100%',
        ease: Expo.easeInOut,
        stagger: 0.1,
    })
    .to(
        '.container-intro',
        1.5,
        {
            display: 'none',
            ease: "power2.out"
        },
        '-=1'
    )
    .to(
        '.container',
        1.5,
        {
            opacity: 1,
            display:'block',
            ease: "power2.out"
        },
        '-=0.5'
    );

//HAMBURGER MENU 
const closeBtn = document.querySelector('.close-btn');
const hamburgerBtn = document.querySelector('.hamburger');
const dropdownMenu = document.querySelector('.dropdown-menu');
const links = Array.from(document.querySelectorAll('.dropdown-link'));

hamburgerBtn.addEventListener('click', () => {
    dropdownMenu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    dropdownMenu.classList.remove('active');
});

links.forEach((link) => {
    link.addEventListener('click', () => {
        dropdownMenu.classList.remove('active');
    });
});