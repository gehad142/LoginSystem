
var nameInput = document.getElementById("signupName");
var e_mailInput = document.getElementById("signupEmail");
var passwordInput = document.getElementById("signupPassword");
var message = document.getElementById("exist");

var usersContainer =[];

if(localStorage.getItem("users")!=null){
    usersContainer=JSON.parse(localStorage.getItem("users"))
 }
function signup(){
    if(validationName() == true &&validationEmail()==true && validationPassword() ==true){
    var user={
        name:nameInput.value,
        email:e_mailInput.value,
        password:passwordInput.value,
    }
    
    usersContainer.push(user);
    localStorage.setItem("users",JSON.stringify(usersContainer));
     message.innerHTML="Success!";
     message.style.color='green';
     message.classList.remove('d-none')
    
} else if(nameInput.value=='' ||e_mailInput.value=='' || passwordInput.value=='') {
    message.innerHTML='All inputs are required'
    message.classList.remove('d-none');
    message.style.color='red';
}
else{
    message.innerHTML='incorrect email or password'
    message.classList.remove('d-none');
    message.style.color='red';
}
}



function validationName(){
    var text =nameInput.value;
    var regexName = /^[A-z]+$/
    if(regexName.test(text)){
       return true;
    }else {
     message.innerHTML="incorrect email or password!";
     message.style.color="red"
     message.classList.remove('d-none')
    return false;
    }
 }

 function validationEmail(){
   
    var emailText = e_mailInput.value;
    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     if(regexEmail.test(emailText)){
       return true;

     }
     else{
      return false;
          

     }

}
function validationPassword(){
    var passText = passwordInput.value;
    var regexpass =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/ ;
     if(regexpass.test(passText)){
       return true;

     }
     else{
       return false;
      
     }

}

var contain = JSON.parse(localStorage.getItem("users"));
var buton=document.getElementById('signbtn');
  buton.addEventListener('click' , function(){
        for(var i=0 ; i<contain.length ; i++){
           if(contain[i].email == e_mailInput.value){
               message.innerHTML="This email already exist!";
               message.style.color="red";
               message.classList.remove('d-none');
           }else{
               signup();
           }
        }
   
  })  




































