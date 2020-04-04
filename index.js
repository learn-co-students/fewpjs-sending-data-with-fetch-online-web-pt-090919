// Add your code here
let formData = {
  name: "Byron",
  email: "Poodle"
};

function submitData(formData){
  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type":
      "application/json", "Accept": "application/json"
    },
    body: JSON.stringify(Object.keys(formData))
    .then(function(response){
      return response.json()
    })
    .then(function(object){
      console.log(object)
    })
    .catch(function(error){
      alert("Bad error!");
      console.log(error.message)
    })
  })
}
