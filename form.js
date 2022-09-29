const userName=document.getElementById('userName')
const email=document.getElementById('email')
const password=document.getElementById('password')
const passwordconfirm=document.getElementById('passwordConfirmation')
const form=document.getElementById('form')


  form.addEventListener("submit",(e)=>{
  e.preventDefault();
  checkInputs();}
 );

 function checkInputs(){
    const nameValue=userName.value;
    const emailValue=email.value;
    const passwordValue=password.value;
    const passwordConfirmationValue=passwordConfirmation.value;

if(nameValue ===""){
    setErrorFor(userName, "o nome de usuário é obrigatório");    
} else {
    setSuccessFor(userName)
}


if(emailValue===""){
    setErrorFor(email, "o email é obrigatório")
} else if(!checkEmail(emailValue)){ 
    setErrorFor(email,"por favor, insira um email válido")
} else{
    setSuccessFor(email)
}


if(passwordValue===""){
    setErrorFor(password,"A senha é obrigatório");
} else if (passwordValue.length < 7) {
    setErrorFor(password,"A senha precisa ter no mínimo 7 caracteres")
} else{
    setSuccessFor(password)
}

if(passwordConfirmationValue===''){
    setErrorFor(passwordConfirmation,"Confirmar a senha é obrigatório")
} else if(passwordConfirmationValue!==passwordValue){
    setErrorFor(passwordConfirmation,"As senha não conferem")
} else(
    setSuccessFor(passwordConfirmation)
)
}


function setErrorFor(input, massege){

    const control=input.parentElement;

    const small= control.querySelector('small')

    small.innerText=massege;

    control.className="control error"
}

function setSuccessFor(input){
    const control=input.parentElement;
    control.className="control success";

}
function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }