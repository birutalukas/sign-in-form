"use strict";

// Buttons
let btnSignIn = document.querySelector('#signIn');
let btnJoinUs = document.querySelector('#joinUs');
let btnRestore = document.querySelector('#restoreAccount');
let btnCreate = document.querySelector('#createAccount');
let btnSubmitSignIn = document.querySelector('#submitSignIn');
let btnSubmitJoin = document.querySelector('#submitJoin');

// Forms
let formSignIn = document.querySelector('.sign-in');
let formJoinUs = document.querySelector('.join-us');

// Alert Messages
let alertEmail = document.querySelector('.input--alert__email');
let alertPass = document.querySelector('.input--alert__pass');
let alertJoinEmail = document.querySelector('.input--alert__joinEmail');
let alertJoinPass = document.querySelector('.input--alert__joinPass');
let alertJoinPassRepeat = document.querySelector('.input--alert__joinPassRepeat');

//### BLOCKS ###//

// Sign In Block
btnSignIn.addEventListener('click', function() {

    btnSignIn.classList.remove('current');
    btnJoinUs.classList.remove('current');
    btnSignIn.classList.add('current');

    formSignIn.style.display = 'block';
    formJoinUs.style.display = 'none';

    alertEmail.innerHTML = "";
    alertPass.innerHTML = "";
});

// Join Us Block
btnJoinUs.addEventListener('click', function() {

    btnSignIn.classList.remove('current');
    btnJoinUs.classList.remove('current');
    btnJoinUs.classList.add('current');

    formSignIn.style.display = 'none';
    formJoinUs.style.display = 'block';

    alertJoinEmail.innerHTML = "";
    alertJoinPass.innerHTML = "";
    alertJoinPassRepeat.innerHTML = "";
});

// Forgot Password Block
btnRestore.addEventListener('click', function() {

});

// Create Account Block
btnCreate.addEventListener('click', function() {
    btnSignIn.classList.remove('current');
    btnJoinUs.classList.remove('current');
    btnJoinUs.classList.add('current');

    formSignIn.style.display = 'none';
    formJoinUs.style.display = 'block';

    alertJoinEmail.innerHTML = "";
    alertJoinPass.innerHTML = "";
    alertJoinPassRepeat.innerHTML = "";
});

//### VALIDATION ###//

let formErrorArr = [];

// --- Sign In Form Validation
function validateSignIn() {
    let signInEmail = document.querySelector('#signEmail').value;
    let signInPass = document.querySelector('#signPassword').value;
    
    validateEmail(signInEmail);

    // Check Password
    if (signInPass == "") {
        alertPass.innerHTML = "<p>Password is required!</p>"
        formErrorArr.push("PassRequired");
    }
}

btnSubmitSignIn.addEventListener('click', function(e) {
    formErrorArr = [];
    validateSignIn();
    if (formErrorArr.length !== 0) {
        e.preventDefault();
    } else {
        formSignIn.submit();
    }
});

// --- Join Us Form Validation
function validateJoinUs() {
    let joinEmail = document.querySelector('#joinEmail').value;
    let joinPass = document.querySelector('#joinPassword').value;
    let joinPassRepeat = document.querySelector('#joinPasswordRepeat').value;
        
    validateEmail(joinEmail);

    if (joinPass == "") {
        alertJoinPass.innerHTML = "<p>Password is required!</p>";
        formErrorArr.push("PassRequired");
    } else if (joinPassRepeat == "") {
        alertJoinPassRepeat.innerHTML = "<p>Please repeat the password!</p>";
        formErrorArr.push("PassRepeat");
    } else if (joinPass !== joinPassRepeat) {
        alertJoinPass.innerHTML = "<p>Password must match!</p>";
        alertJoinPassRepeat.innerHTML = "<p>Password must match!</p>";
        formErrorArr.push("PassNotMatch");
    }
}

btnSubmitJoin.addEventListener('click', function(e) {   
    formErrorArr = [];
    validateJoinUs();
    if (formErrorArr.length !== 0) {
        e.preventDefault();
    } else {       
        formJoinUs.submit();
    }
});

// --- Email Validation
function validateEmail(value) {
    let atposition = value.indexOf("@");
    let dotposition = value.lastIndexOf(".");

    if (value == "") {
        alertEmail.innerHTML = "<p>E-mail is required!</p>";
        alertJoinEmail.innerHTML = "<p>E-mail is required!</p>";
        formErrorArr.push("EmailRequired");
    } else if (atposition < 1 || dotposition < atposition + 2) {
        alertEmail.innerHTML = "<p>Please enter correct email ID!</p>";
        alertJoinEmail.innerHTML = "<p>Please enter correct email ID!</p>";
        formErrorArr.push("EmailIncorect");
    } else {
        alertEmail.innerHTML = "";
        alertJoinEmail.innerHTML = "";
        alertJoinPass.innerHTML = "";
        alertJoinPassRepeat.innerHTML = "";
    }
}