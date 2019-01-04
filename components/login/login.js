export default class Login {
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
        form.id = 'login-form';
        form.method = 'post';
        const form_group_email = document.createElement('div');
        form_group_email.className = 'form-group';
        form_group_email.setAttribute("role", "email form group");
        form_group_email.innerHTML = '<label for="email" class="login--label email" tabindex="10" style="visibility:hidden">Email</label>'+
        '<input type="email" required data-value-missing="Required" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$" data-pattern-mismatch="Wrong pattern" class="form-control email" id="email" name="email" tabindex="11" placeholder="Email">'+
        '<em class="errorMessage" style="visibility:hidden;"></em>';
        form.appendChild(form_group_email);
        const form_group_password = document.createElement('div');
        form_group_password.setAttribute("role", "password form group");
        form_group_password.className = 'form-group';
        form_group_password.innerHTML = '<label for="password" class="login--label password" tabindex="12" style="visibility:hidden">Password</label>'+
        '<input type="password" class="form-control password" id="password" name="password" tabindex="13" placeholder="Password" required>'+
        '<em class="errorMessage" style="visibility:hidden;"></em>';
        form.appendChild(form_group_password);
        const form_group_button = document.createElement('div');
        form_group_button.setAttribute("role", "button form group");
        form_group_button.className = 'form-group';
        form_group_button.innerHTML = '<button class="form-control login" id="login" name="login" tabindex="14">Login</button>';
        form.appendChild(form_group_button);
        article.appendChild(form);
    }
}

// module.exports = Login;