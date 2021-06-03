// set variables
const form = document.querySelector('form');
const user = document.getElementById('username');
const pass = document.getElementById('password');
const email = document.getElementById('email');
const textField = document.querySelector('input');
const invalid = document.querySelector('.invalidText');

//form event
form.onsubmit = function(e) {
    //if field value is empty throw error
  if (email.value === '' || pass.value === '' || user.value === '') {
    e.preventDefault();

    console.log('test');
    
    textField.classList.add("invalidText");
  } else {
      textField.classList.remove("invalidText");
  }
}