// accessing password box and eye btn
let getPbox= document.querySelector(".passwordBox");

let eye = document.querySelector('#eye_icon');

//Here making a function which will check if our password type is
//password or text if it will be text then this function will chenge
//change it to password when we'll click eye icon and vice-versa

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
 