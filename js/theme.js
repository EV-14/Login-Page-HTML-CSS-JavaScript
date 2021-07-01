let btnRegister = document.getElementById('js-register-toggle'),
    btnLogin = document.getElementById('js-login-toggle');

let popupLogin = document.getElementById('js-login-popup'),
    popupRegister = document.getElementById('js-register-popup');

btnRegister.addEventListener('click', function() {
    popupRegister.classList.add('active');
    popupLogin.classList.add('active');
});

btnLogin.addEventListener('click', function() {
    popupLogin.classList.remove('active');
    popupRegister.classList.remove('active');
});