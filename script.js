/* Script */

let loginBtn = document.getElementById('login_btn');
loginBtn.addEventListener('click', loginUser);

function loginUser(){
    let userEmail = document.getElementById('user_email').value;
    let userPassword = document.getElementById('user_password').value;

    let userData = {
     yourEmail: userEmail,
        yourPassword: userPassword
    }

    localStorage.setItem('userLogin', JSON.stringify(userData));

    function getData(){
        let userGetData = localStorage.getItem('userLogin');
    }

}