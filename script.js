let nameError = document.querySelector('#name-error');
let phoneError = document.querySelector('#phn-error');
let emailError = document.querySelector('#email-error');
let msgError = document.querySelector('#msg-error');
let submitError = document.querySelector('#submit-error');

function validateName(){
    let name = document.querySelector('#contact-name').value;
    if (name.length == 0) {
        nameError.innerHTML = "Name is required";
        return false;
    } if (!name.match(/^[A-Za-z]+ [A-Za-z]+$/)) {
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}

function validatePhn() {
    let phn = document.querySelector('#contact-phn').value;
    if (phn.length == 0) {
        phoneError.innerHTML = 'Phone number is required';
        return false;
    } if (!phn.match(/^\d{10}$/)) {
        phoneError.innerHTML = 'Write correct phone number';
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return false;
}

function validateEmail() {
    let email = document.querySelector('#contact-email').value;
    if (email.length == 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    } if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        emailError.innerHTML = 'Valid email is required';
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
        

}

function validateMsg() {
    let msg = document.querySelector('#contact-msg').value;
    if (msg.length == 0) {
        msgError.innerHTML = 'Atleast 30 charcters are required';
        return false;
    } if (msg.length < 30) {
        msgError.innerHTML = `Minimum ${30 - msg.length} is required`;
        return false;
    }
    msgError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}

function validateSubmit() {
    // let submit = document.querySelector('#submit');
    if (!validateName() || !validateEmail() || !validatePhn() || !validateMsg()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix the issue';
        setTimeout(() => { submitError.style.display = 'none'; }, 3000);
        return false;
    }
    return true;
}