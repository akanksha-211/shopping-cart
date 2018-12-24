class Login {
    click() {
        document.querySelector("#login").addEventListener('click', function() {
            event.stopPropagation();
            window.location = '../home/home.html';
        })
    }
}

module.exports = Login;