
// let signin = document.getElementById('butn');


// fetch('http://localhost/miniproject/miniProject/select.php', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//     })
//     .then(r => r.json()).then(data =>{ 
       
//        var users = data ;
//     })
   

// signin.addEventListener('click' , function(){
//    var email = document.getElementById('email').value;
//    var password = document.getElementById('password').value;
//    let span = document.getElementById('passSpan');
// })
   



let signin = document.getElementById('butn');
let users;

fetch('./select.php', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
})
.then(r => r.json())
.then(data => {
    users = data; 
    EventListener();
})
.catch(error => {
    console.error('Error fetching data:', error);
});

function EventListener() {
    signin.addEventListener('click', function() {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        let span = document.getElementById('passSpan');

        // console.log(users);
        
        for (let user of users) {
            if (user.email == email && user.passwordd == password) {

                console.log(user);
               
fetch("result.php",{

    "method": "POST",

    "headers": {

        "Content-Type": "application/json; charset=utf-8"
    },

    "body": JSON.stringify(user)

    


  });

//   window.open("./result.html");
                break;
            }
        }

    });
}



document.getElementById('check').onclick = function() {
    if ( this.checked ) {
       document.getElementById('password').type = "text";
    } else {
       document.getElementById('password').type = "password";

    }}


    