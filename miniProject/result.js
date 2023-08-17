fetch("./user.php", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((r) => r.json())
    .then((data) => {
      user = data;
      console.log("the user is : " + user);
    })
