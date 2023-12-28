// accessing password box and eye btn
let getPbox= document.querySelector(".passwordBox");

let eye = document.querySelector('#eye_icon');



 eye.onclick=function(){
    if(getPbox.type =="password"){
        getPbox.type= 'Text'
        eye.src='eye-icons/eye-open.png';
    }
    else{
        getPbox.type ="password";
        eye.src='eye-icons/eye-close.png';
    }
 }
