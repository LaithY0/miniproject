document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let users;

  fetch("./select.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((r) => r.json())
    .then((data) => {
      users = data;
      setupEventListener(users);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});

function setupEventListener(users) {
  let signin = document.getElementById("butn");
  let span = document.getElementById("passSpan");

  signin.removeEventListener("click", signInClick);
  signin.addEventListener("click", signInClick);

  function signInClick() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    let foundUser = false;

    for (let i = 0; i < users.length; i++) {
      if (users[i].email === email && users[i].passwordd === password) {
        foundUser = true;
        fetch("result.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
          body: JSON.stringify(users[i]),
        })
          .then((r) => r.json())
          .then((data) => {
            users = data;
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });

        window.open("./result.html");
        break; // Exit the loop once a match is found
      }
    }

    if (!foundUser) {
      span.innerText = "Wrong password or email.";
      span.style.color = "red";
    }
  }
}

document.getElementById("check").onclick = function () {
  if (this.checked) {
    document.getElementById("password").type = "text";
  } else {
    document.getElementById("password").type = "password";
  }
};
