import Register from './Register';

const reg = new Register();

reg.render();
init();

function init() {
    const form_control = document.getElementsByTagName("input");
    Array.prototype.forEach.call(form_control, form_control => {
        form_control.addEventListener('focus', _ => {
            (form_control.parentElement).querySelector(".login--label").style.visibility = 'visible';
        });
        form_control.addEventListener('blur', _ => {
            if(!event.target.value || event.target.value == "") {
                (form_control.parentElement).querySelector(".login--label").style.visibility = 'hidden';
            }
            if(event.target.validity.valid) {
                (event.target).parentElement.classList.remove('error');
                ((event.target).parentElement).querySelector(".errorMessage").style.visibility = 'hidden';
            }
            else{
                (event.target).parentElement.classList.add('error');
            }
        });
    });
    document.querySelector(".form-control.signup").addEventListener('click', _ => {
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
            if(input.type == "email" || input.type == "password") {
                if(input.validity.patternMismatch) {
                    errorMessage.innerText = 'Please enter a valid email address';
                }
            }
            if(input.type == "password") {
                if(input.validity.patternMismatch) {
                    errorMessage.innerText = 'Password must have a alphabet and a number and no spaces';
                }
            }
        });
        if(valid){
            if(document.querySelector(".password").value == document.querySelector(".cnfpassword").value) {
                window.location = "/";
                document.querySelector(".cnfpassword").parentElement.classList.remove('error');
            }
            else {
                document.querySelector(".cnfpassword").parentElement.classList.add('error');
                (document.querySelector(".cnfpassword").parentElement).querySelector(".errorMessage").style.visibility = 'visible';
                (document.querySelector(".cnfpassword").parentElement).querySelector(".errorMessage").innerText = 'Password and Confirm password must match';
            }
        }
        else {
            if(document.querySelector(".cnfpassword").value && (document.querySelector(".password").value == document.querySelector(".cnfpassword").value)) {
                document.querySelector(".cnfpassword").parentElement.classList.remove('error');
            }
            else {
                document.querySelector(".cnfpassword").parentElement.classList.add('error');
                (document.querySelector(".cnfpassword").parentElement).querySelector(".errorMessage").style.visibility = 'visible';
                (document.querySelector(".cnfpassword").parentElement).querySelector(".errorMessage").innerText = 'Password and Confirm password must match';
            }
        }
    });
}