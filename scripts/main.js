const emailBtn = document.querySelector('.email');
const emailInput = document.querySelector('.email-message');
const errorMessage = document.querySelector('.error-message');

function validateEmail() {
    const validateRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

 if ( validateRegex.test(emailInput.value) ) {
    alert('Please check your email to confirm subscription')
  }
 if ( !validateRegex.test(emailInput.value) ) {
    showErrorMessage();
  }
}

function showErrorMessage() {

    errorMessage.style.visibility = 'visible';
    setTimeout( () => {
        errorMessage.style.visibility = 'hidden';
    }, 2000)
}






emailBtn.addEventListener('click', validateEmail);