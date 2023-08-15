let btn = document.getElementById('butn');
let namespan = document.getElementById('nameSpan');
let emailSpan = document.getElementById('emailSpan');
let passSpan = document.getElementById('passSpan');
let phonespane = document.getElementById('phoneSpan');


btn.addEventListener('click', function (event) {

let firstName = document.getElementById('fname').value;
let middleName = document.getElementById('mname').value;
let lastName = document.getElementById('lname').value;
let familyName = document.getElementById('fmname').value;
let email = document.getElementById('email').value;
let Cemail = document.getElementById('Cemail').value;
let password = document.getElementById('password').value;
let Cpassword = document.getElementById('Cpassword').value;
let phone = document.getElementById('phone').value;
let date = document.getElementById('date').value;


var regularExpression  =/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$@^%&? "])[a-zA-Z0-9!#$@^%&?]{8,20}$/;

namespan.innerText = '';
emailSpan.innerText = '';
passSpan.innerText = '';
phonespane.innerText = '';



// name validation 

var reg = /\S+@\S+\.\S+/;

  if (!/^[a-zA-Z]+$/.test(firstName) || !/^[a-zA-Z]+$/.test(middleName)
   || !/^[a-zA-Z]+$/.test(lastName) || !/^[a-zA-Z]+$/.test(familyName)){

    namespan.innerText = 'Name must be a letters';
    namespan.style.color = "red";
        event.preventDefault();
        return;

  }

  if (firstName.length < 3 || middleName.length < 3 || lastName.length < 3 || familyName < 3){

    namespan.innerText = 'name at lest must be a 3 letters';
    namespan.style.color = "red";
        event.preventDefault();
        return;

  }


  // email validation 

    if(!reg.test(email)){
        
        emailSpan.innerText = 'valid email';
        emailSpan.style.color = "red";
        event.preventDefault();
        return;

    }

    if(email !== Cemail){

        
        emailSpan.innerText = 'email does not match';
        emailSpan.style.color = "red";
        event.preventDefault();
        return;

    }

    // password validation

    if(password.length < 8 || password.length > 20 ){

        passSpan.innerText = 'password length must be at least 8 and less than 20';
            passSpan.style.color = "red";
            event.preventDefault();
            
             return;
    }
       
    if(!regularExpression.test(password) ){
    
        passSpan.innerText = 'password must have a char and number and special char';
            passSpan.style.color = "red";
            event.preventDefault();
    
            return;
    }
       
    if (password !== Cpassword){
    
           passSpan.innerText = 'Password does not match';
            passSpan.style.color = "red";
            event.preventDefault();
    
        return ;
    }


    // date validation 

var today = new Date();
var birthDate = new Date(date);
var age = today.getFullYear() - birthDate.getFullYear();


if(birthDate == "Invalid Date" ){
    namespan.innerText = 'Invalid birthDate';
    namespan.style.color = "red";
        event.preventDefault();
        return;
}

if(age <= 16 ){
    namespan.innerText = 'Age must me more than 16';
    namespan.style.color = "red";
        event.preventDefault();
        return;
}


// phone validation 


 var num = /^[0-9a]+$/;

if (!num.test(phone)) {

   phonespane.innerText = 'phone must be a number only !';
   phonespane.style.color = "red";
            event.preventDefault();
    
        return ;
}

if(phone.length < 10){

    phonespane.innerText = 'phone must be at lest 10 numbers!';
   phonespane.style.color = "red";
            event.preventDefault();
    
        return ;
}


   


    var info = {
        "fname" : firstName,
        "mname" : middleName,
        "lname" : lastName,
        "fmname" : familyName,
        "email" : email,
        "password" : password,
        "phone" : phone,
        "date" : date,
    }

 
    console.log(info);

    
fetch("insert.php",{

    "method": "POST",

    "headers": {

        "Content-Type": "application/json; charset=utf-8"
    },

    "body": JSON.stringify(info)

    


  });



 window.open('./welcome.html');


});


document.getElementById('check').onclick = function() {
    if ( this.checked ) {
       document.getElementById('password').type = "text";
    } else {
       document.getElementById('password').type = "password";
    }
    if ( this.checked ) {
        document.getElementById('Cpassword').type = "text";
     } else {
        document.getElementById('Cpassword').type = "password";
     }
};



       


        

    
    









