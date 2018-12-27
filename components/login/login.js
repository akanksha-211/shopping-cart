class Login {
    constructor() {
    }
    render() {
        const aside = document.querySelector('.page__content--aside');
        const heading2 = document.createElement('h2');
        heading2.tabIndex = 8;
        heading2.innerText = 'Login';
        const heading5 = document.createElement('span');
        heading5.tabIndex =9;
        heading5.innerText = 'Get access to your Orders, Wishlist and Recommendations';
        aside.appendChild(heading2);
        aside.appendChild(heading5);
        const article = document.querySelector('.page__content--article');
        const form = document.createElement('form');
        const form_group_email = document.createElement('div');
        form_group_email.className = 'form-group';
        form_group_email.setAttribute("role", "email form group");
        form_group_email.innerHTML = '<label for="email" class="login--label" tabindex="10">Email</label>'+
        '<input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" class="form-control email" id="email" name="email" tabindex="11">';
        form.appendChild(form_group_email);
        const form_group_password = document.createElement('div');
        form_group_password.setAttribute("role", "password form group");
        form_group_password.className = 'form-group';
        form_group_password.innerHTML = '<label for="password" class="login--label" tabindex="12">Password</label>'+
        '<input type="password" pattern="" class="form-control password" id="password" name="password" tabindex="12">';
        form.appendChild(form_group_password);
        const form_group_button = document.createElement('div');
        form_group_button.setAttribute("role", "button form group");
        form_group_button.className = 'form-group';
        form_group_button.innerHTML = '<button type="button" class="form-control login" id="login" name="login" tabindex="13">Login</button>';
        form.appendChild(form_group_button);
        article.appendChild(form);
    }
}

module.exports = Login;