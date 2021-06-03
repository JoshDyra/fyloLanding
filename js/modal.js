//select modalBtn, modalCloseBtn, and modalScreen
const modalScreen = document.querySelector('.modalPopup');
const modalBtn = document.querySelector('.modalBtn');
const modalCloseBtn = document.querySelector('.modalCloseBtn');
const modal = document.querySelector('.modalPopup');

//click event listeners on modalBtn & modalCloseBtn
modalBtn.addEventListener('click', modalPopup);
modalCloseBtn.addEventListener('click', modalClose);

// FUNCTIONS
function modalPopup() {
//add .openModal to modalScreen
modalScreen.classList.add("openModal");
}

function modalClose() {
//when click modalCloseBtn / remove .openModal from modalPopup
modalScreen.classList.remove("openModal");
console.log('modalclose');
}


modalScreen.addEventListener('click', function(e) {
    e.stopPropagation();
//if click is not the modal
// remove class openModal

//if click is on modal,
// keep modal open
if(!modal) {
    console.log('modalopen');
    modalScreen.classList.remove("openModal");
} else {  }
});