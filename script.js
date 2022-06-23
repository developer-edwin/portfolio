document.querySelector('#hamburgerMenu').addEventListener('click', () => {
    toggleManu()
});

document.querySelector('#hamburgerMenuClose').addEventListener('click', () => {
    toggleManu()
});

if (screen.width < 768) {
    const navLinks = document.querySelectorAll('.navLink');
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', () => {
            toggleManu()
        });
    }
}

function toggleManu(justRemove = 0) {
    document.querySelector('nav').classList.toggle('displayMenu');
    document.querySelector('body').classList.toggle('noScroll');
    document.querySelector('#logo').classList.toggle('blur');
    document.querySelector('section').classList.toggle('blur');
}