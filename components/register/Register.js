export default class Register {
    constructor() {
    }
    render() {
        const aside = document.querySelector('.page__content--aside');
        const heading2 = document.createElement('h2');
        heading2.innerText = 'Signup';
        heading2.tabIndex = 8;
        const heading5 = document.createElement('span');
        heading5.innerText = 'We do not share your personal details with anyone.';
        heading5.tabIndex = 9;
        aside.appendChild(heading2);
        aside.appendChild(heading5);
        const article = document.querySelector('.page__content--article');
        const form = document.createElement('form');
        const form_group_firstName = document.createElement('div');
        form_group_firstName.setAttribute("role", "firstname form group");
        form_group_firstName.className = 'form-group';
        form_group_firstName.innerHTML = '<label for="firstName" class="login--label"  tabindex="10" style="visibility: hidden;">First Name</label>'+
        '<input type="text" pattern="[a-zA-Z]$" class="form-control firstName" id="firstName" name="firstName" tabindex="11" placeholder="First Name" required>'+
        '<em class="errorMessage" style="visibility:hidden;"></em>';
        form.appendChild(form_group_firstName);
        const form_group_lastName = document.createElement('div');
        form_group_lastName.setAttribute("role", "lastname form group");
        form_group_lastName.className = 'form-group';
        form_group_lastName.innerHTML = '<label for="lastName" class="login--label" tabindex="12" style="visibility: hidden;">Last Name</label>'+
        '<input type="text" pattern="[a-zA-Z]$" class="form-control lastName" id="lastName" name="lastName" tabindex="13" placeholder="Last Name" required>'+
        '<em class="errorMessage" style="visibility:hidden;"></em>';
        form.appendChild(form_group_lastName);
        const form_group_email = document.createElement('div');
        form_group_email.setAttribute("role", "email form group");
        form_group_email.className = 'form-group';
        form_group_email.innerHTML = '<label for="email" class="login--label" tabindex="14" style="visibility: hidden;">Email</label>'+
        '<input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" class="form-control email" id="email" name="email" tabindex="15" placeholder="Email" required>'+
        '<em class="errorMessage" style="visibility:hidden;"></em>';
        form.appendChild(form_group_email);
        const form_group_password = document.createElement('div');
        form_group_password.setAttribute("role", "password form group");
        form_group_password.className = 'form-group';
        form_group_password.innerHTML = '<label for="password" class="login--label" tabindex="16" style="visibility: hidden;">Password</label>'+
        '<input type="password" class="form-control password" id="password" name="password" tabindex="17" pattern="[a-zA-Z0-9]{6,}" placeholder="Password" required>'+
        '<em class="errorMessage" style="visibility:hidden;"></em>';
        form.appendChild(form_group_password);
        const form_group_cnfpassword = document.createElement('div');
        form_group_cnfpassword.setAttribute("role", "confirm password form group");
        form_group_cnfpassword.className = 'form-group';
        form_group_cnfpassword.innerHTML = '<label for="cnfpassword" class="login--label" tabindex="18" style="visibility: hidden;">Confirm Password</label>'+
        '<input type="password" class="form-control cnfpassword" id="cnfpassword" name="cnfpassword" tabindex="19" placeholder="Confirm Password" required>'+
        '<em class="errorMessage" style="visibility:hidden;"></em>';
        form.appendChild(form_group_cnfpassword);
        const form_group_button = document.createElement('div');
        form_group_button.setAttribute("role", "button form group");
        form_group_button.className = 'form-group';
        form_group_button.innerHTML = '<button type="button" class="form-control signup" id="signup" name="signup" tabindex="20">Signup</button>';
        form.appendChild(form_group_button);
        article.appendChild(form);
    }
}
