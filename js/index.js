 
 
 var emailInput = document.getElementById("signinEmail");
 var passwordInput = document.getElementById("signinPassword");
 var s = JSON.parse(localStorage.getItem("users"));
 var message_=document.getElementById('incorrect')
 

var test =localStorage.getItem('sessionName')
       
function login(){
    for(var i=0 ; i<s.length ; i++){
        
        if(s[i].email == emailInput.value && s[i].password==passwordInput.value){
            window.location = "./index.html"
            localStorage.setItem('sessionName',(s[i].name));
          break   
        } else {
           
            message_.innerHTML="incorrect email or password!";
            message_.style.color="red";
            message_.classList.remove('d-none');
        }
     }
           
}
 if(test){
    document.getElementById('username').innerHTML="Welcome "+test
     }

var btn1=document.getElementById('logbtn');
   btn1.addEventListener('click' , function(){
    if(emailInput.value=='' || passwordInput.value=='') {
        message_.innerHTML="All inputs are required!"
        message_.classList.remove('d-none');
        message_.style.color='red';
    }else{
        login();
    }
         }

   )
 function logout(){
    window.location = "./login.html"
 }





