/* Script */

function getData(){
    let user = document.getElementById('user');
    let userData = localStorage.getItem('userLogin');
    let convertData = JSON.parse(userData);
    user.innerHTML = convertData.yourEmail +'!'
}
getData();



let logout_btn = document.getElementById('logout_btn');
logout_btn.addEventListener('click', OutBtn);



function OutBtn(){
    localStorage.removeItem('userLogin');
    window.location.href = 'index.html';
}


