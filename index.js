// Add your code here

function submitData(name, email) {
     let request = "http://localhost:3000/users";

     let formData = {
          name: name,
          email: email
     }

     let configObj = {
          method: "POST",
          headers: {
               "Content-Type": "application/json",
               "Accept": "application/json"
          },
          body: JSON.stringify(formData)
     }

     return fetch(request, configObj)
          .then(res => res.json())
          .then(json => {
               document.body.innerHTML = json.id
               console.log(json)
          })
          .catch(err => {
               document.body.innerHTML = err.message;
               console.log(err.message);
          })
}