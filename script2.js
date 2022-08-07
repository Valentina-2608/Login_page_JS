/* Script */

/* Registration form validation */

let userName = document.getElementById('user_name');
let userEmail = document.getElementById('user_email');
let userPassword = document.getElementById('user_password');
let form=document.getElementById('r_form');

function RegisterUser(){
	let userName = document.getElementById('user_name');
    let userEmail = document.getElementById('user_email');
    let userPassword = document.getElementById('user_password');
	const nameData=userName.value;
	const emailData=userEmail.value;
	const passwordData=userPassword.value;

   
    let userData = {
		yourName: nameData,
        yourEmail: emailData,
        yourPassword: passwordData
    }

    localStorage.setItem('userLogin', JSON.stringify(userData));
    window.location.href = "homepage.html";

}

function validationName(data){
    pattern = /^[a-zA-Z][A-Za-z0-9]{7,11}$/i;
    return pattern.test(data);
}


function validationEmail(data){
    return data.includes('@');
}


function validationPassword(data){
	pattern = /^[a-zA-Z][A-Za-z0-9\_]{7,11}$/i;
    return pattern.test(data);

}


userName.addEventListener('input',function(event){	
	const elem=event.target;
	if (!validationName(elem.value)){
		elem.classList.add('error');
	}else{
		elem.classList.remove('error');
}});
		

userEmail.addEventListener('input',function(event){
	const elem=event.target;	
	if (!validationEmail(elem.value)){
		elem.classList.add('error');
	} else {
		elem.classList.remove('error');
}});
	

userPassword.addEventListener('input',function(event){
	const elem=event.target;	
	if (!validationPassword(elem.value)){
		elem.classList.add('error');
	} else {
		elem.classList.remove('error');
}});
	

form.addEventListener('submit',function(event){
event.preventDefault();

const nameData=userName.value;
const emailData=userEmail.value;
const passwordData=userPassword.value;


const isNameValid=validationName(nameData);
const isEmailValid=validationEmail(emailData);
const isPasswordValid=validationPassword(passwordData);

if (isNameValid && isEmailValid && isPasswordValid){
	RegisterUser();
}else{
	alert('You make mistakes');
}
});




let new_link = document.querySelector('.new_link');
new_link.addEventListener('click',function(){
    alert('Please, fill out the form');
})


