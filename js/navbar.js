const nav = document.querySelector('.icon');
const icon = document.querySelector('.fa-bars');

nav.addEventListener('click', navBar);

function navBar() {
    const link = document.querySelector('.navLinks');

    //DISPLAY links
    if (link.style.display === 'block') {
        link.style.display = 'none';
    } else {
        link.style.display = 'block';
    }

    //toggle X icon
    icon.classList.toggle("fa-times");
}
