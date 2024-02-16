var registerForm = document.getElementById('register-form')
var closeRegisterForm = document.getElementById('close-register-form')


function registerTemplateOpen(){
    registerForm.style.display = "block";
    flag = 1;
}

closeRegisterForm.addEventListener("click", ()=>{
  registerForm.style.display = "none";
})

