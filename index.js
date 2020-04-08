// Add your code here

function submitData(userName, eMail) {
    const body = document.querySelector("body");
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: userName,
          email: eMail
        })
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(object) {
        let ego = document.createElement("p");
        ego.textContent = object.id;
        body.appendChild(ego);
    })
    .catch(function(error) {
        let ego = document.createElement("p");
        ego.textContent = error.message;
        body.appendChild(ego);
    });
}