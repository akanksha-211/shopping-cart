class Register {
    constructor() {
    }
    render() {
        const aside = document.querySelector('.page__content--aside');
        const heading2 = document.createElement('h2');
        heading2.innerText = 'Signup';
        const heading5 = document.createElement('h5');
        heading5.innerText = 'We do not share your personal details with anyone.';
        aside.appendChild(heading2).appendChild(heading5);
        const article = document.querySelector('.page__content--article');
        const form = document.createElement('form');
        const form_group_firstName = document.createElement('div');
        form_group_firstName.className = 'form-group';
        form_group_firstName.innerHTML = '<label for="firstName" class="login--label">First Name</label>'+
        '<input type="text" pattern="[a-zA-Z]$" class="form-control firstName" id="firstName" name="firstName">';
        form.appendChild(form_group_firstName);
        const form_group_lastName = document.createElement('div');
        form_group_lastName.className = 'form-group';
        form_group_lastName.innerHTML = '<label for="lastName" class="login--label">Last Name</label>'+
        '<input type="text" pattern="[a-zA-Z]$" class="form-control lastName" id="lastName" name="lastName">';
        form.appendChild(form_group_lastName);
        const form_group_email = document.createElement('div');
        form_group_email.className = 'form-group';
        form_group_email.innerHTML = '<label for="email" class="login--label">Email</label>'+
        '<input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" class="form-control email" id="email" name="email">';
        form.appendChild(form_group_email);
        const form_group_password = document.createElement('div');
        form_group_password.className = 'form-group';
        form_group_password.innerHTML = '<label for="password" class="login--label">Password</label>'+
        '<input type="password" pattern="" class="form-control password" id="password" name="password">';
        form.appendChild(form_group_password);
        const form_group_cnfpassword = document.createElement('div');
        form_group_cnfpassword.className = 'form-group';
        form_group_cnfpassword.innerHTML = '<label for="cnfpassword" class="login--label">Confirm Password</label>'+
        '<input type="password" pattern="" class="form-control cnfpassword" id="cnfpassword" name="cnfpassword">';
        form.appendChild(form_group_cnfpassword);
        const form_group_button = document.createElement('div');
        form_group_button.className = 'form-group';
        form_group_button.innerHTML = '<button type="button" class="form-control signup" id="signup" name="signup">Signup</button>';
        form.appendChild(form_group_button);
        article.appendChild(form);
    }
}

module.exports = Register;