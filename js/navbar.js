const nav = document.querySelector('.icon');

nav.addEventListener('click', navBar);

function navBar() {
    const link = document.querySelector('.navLinks');

    if (link.style.display === 'block') {
        link.style.display = 'none';
    } else {
        link.style.display = 'block';
    }
}
