const Login = require('./Login');

const login = new Login();

login.render();

init();
function init(){
    document.querySelector(".form-control.email").addEventListener('focus', _ => {
        document.querySelector(".login--label.email").style.visibility = 'visible';
    });
    document.querySelector(".form-control.email").addEventListener('blur', _ => {
        if(!event.target.value || event.target.value == "") {
            document.querySelector(".login--label.email").style.visibility = 'hidden';        
        }
    });
    document.querySelector(".form-control.password").addEventListener('focus', _ => {
        document.querySelector(".login--label.password").style.visibility = 'visible';
    });
    document.querySelector(".form-control.password").addEventListener('blur', _ => {
        if(!event.target.value || event.target.value == "") {
            document.querySelector(".login--label.password").style.visibility = 'hidden';
            document.querySelector(".form-control.login").click();
        }
    });
    document.querySelector(".form-control.login").addEventListener('click', _ => {
        event.preventDefault();
        const input = document.getElementsByTagName("input");
        let valid = true;
        Array.prototype.forEach.call(input, input => {
            const errorMessage = (input.parentElement).querySelector(".errorMessage");
            if(input.validity.valid) {
                input.parentElement.classList.remove('error');
                errorMessage.innerText = '';
                errorMessage.style.visibility = 'hidden';
            }
            else {
                input.parentElement.classList.add('error');
                errorMessage.style.visibility = 'visible';
                valid = false;
            }
            if(input.validity.valueMissing) {
                errorMessage.innerText = input.placeholder+' required';
            }
            else if(input.validity.patternMismatch) {
                if(input.type == "email") {
                    errorMessage.innerText = 'Please enter a valid email address';
                }
                else if(input.type == "password") {
                    console.dir(input.value);
                    errorMessage.innerText = 'Password must have a alphabet and a number and no spaces';
                }
            }
        });
        if(valid){
            window.location = "/";
        }
    });
}