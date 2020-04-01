// Add your code here
function submitData(name, email) {
    let url = "http://localhost:3000/users"
    let userData = {
        name: name,
        email: email
    }
    let configObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userData)
    };

    return fetch(url, configObject)
        .then(function(response) {
            return response.json();
        })
        .then(function(data){
            document.body.innerHTML = data["id"];
        })
        .catch(function(error) {
            document.body.innerHTML = error.message
        });
}