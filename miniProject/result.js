fetch('./user.php')
.then(r => r.json())
.then(data => {
    users = data; 

    console.log(users);


})