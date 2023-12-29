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



        //    Adding new feature  
        //This feature will tell us the strength of our password
 let pass =document.getElementById('Password');
 let str= document.querySelector('#strength');

getPbox.addEventListener('input', ()=>{
       if(getPbox.value.length>0){
        pass.style.display="block";
       }
       else{
        pass.style.display='none';
       }
       if(getPbox.value.length<4){
        str.innerHTML="weak";
        pass.style.color="red"
       }
       else  if(getPbox.value.length>=4 && getPbox.value.length <8){
        str.innerHTML="medium";
        pass.style.color="yellow"
        
       }
       else{
        str.innerHTML= "strong"
        pass.style.color="green"
       }
})
 
