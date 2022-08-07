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
    window.location.href = "homepage.html";

}
let new_link = document.querySelector('.new_link');
new_link.addEventListener('click',function(){
    alert('Please, fill out the form');
})