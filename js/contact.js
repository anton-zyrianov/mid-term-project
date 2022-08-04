function addPost(event) {
   event.preventDefault(); 

   let name = document.getElementById("nombre").value;
   let email = document.getElementById("correo").value;
   let phone = document.getElementById("movil").value;
   let message = document.getElementById("mensaje").value;

   fetch("https://jsonplaceholder.typicode.com/posts", {     
   
   method: "POST",
   
   body: JSON.stringify({
      name: name,
      email: email,
      phone: phone,
      message: message
   }),
   
   headers: {
      "Content-type": "application/json; charset=UTF-8"
   }
   })
   .then((response) => {
      
      
      const elementForm = document.querySelector('.formulario');

      if(response.status === 201){
         const elementSuccess = document.querySelector('.post-success');
         elementSuccess.style.display = "block";
      
         elementForm.style.display = "none";
      } else {
         elementFailed = document.querySelector('.post-failed');
         elementFailed.style.display = "block";

         elementForm.style.display = "none";
      }

      return response.json();

   })
   .then((data) => {
      console.log(data);
   });

}

document.getElementById("form-contact").addEventListener("submit", addPost);