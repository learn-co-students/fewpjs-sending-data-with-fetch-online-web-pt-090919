// Add your code here
function submitData( name, email) {
return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      console.log(object);
      const body = document.querySelector('body');
      body.append(object.id)
    })
    .catch(function(error) {
      alert('Unauthorized Access');
      console.log(error.message);
      const body = document.querySelector('body');
      body.append(error.message)
    });
}

document.addEventListener('DOMContentLoaded', function() {
  submitData()
})