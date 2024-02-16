var registerForm = document.getElementById('register-form')
var closeRegisterForm = document.getElementById('close-register-form')

var loginForm = document.getElementById('login-form')
var closeLoginForm = document.getElementById('close-login-form')


function registerTemplateOpen(){
    registerForm.style.display = "block";
}

closeRegisterForm.addEventListener("click", ()=>{
  registerForm.style.display = "none";
})

function loginTemplateOpen(){
  loginForm.style.display = "block";
}

closeLoginForm.addEventListener("click", ()=>{
  loginForm.style.display = "none";
})