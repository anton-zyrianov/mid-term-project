const buttonBurger = document.getElementById('button-menu');
const navBurger = document.getElementById('nav-burger');
const lockScroll = document.body;

buttonBurger.addEventListener('click', () => {
   buttonBurger.classList.toggle('active');
   navBurger.classList.toggle('active');
   lockScroll.classList.toggle('lock');
});

function getJsonIndividual() {
   fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((data) => {   
         document.querySelector(".proyecto-header-title").innerHTML = `${data.title}`;
         document.querySelector(".proyecto-description").innerHTML = `<p>${data.body}</p>`;
      s});
}

function getJsonProjects(){
   fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((res) => {
      
         const recentProjects = document.querySelector(".cajas-global");

         res.forEach((data, index) => {
            if(index < 3) {
               const newElement = document.createElement('div');
               newElement.classList.add('caja-proyecto');
               newElement.innerHTML = `
                  <img class="project" src="/img/recent-projects.jpeg" alt="Recent Projects">
                  <h4>${data.title}</h4>
                  <p>${data.body}</p>
                  <a href="./project.html">Learn more</a>`;
               
               recentProjects.appendChild(newElement);

            }
         })
      });
}

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
      
      
      if(response.status === 201){
         const elementSuccess = document.querySelector('.post-success');
         elementSuccess.style.display = "block";
      
         const elementForm = document.querySelector('.formulario');
         elementForm.style.display = "none";
      } else {
         elementFailed = document.querySelector('.post-failed');
         elementFailed.style.display = "block";
      }

      return response.json();

   })
   .then((data) => {
      console.log(data);
   });

}

document.getElementById("form-contact").addEventListener("submit", addPost);
getJsonIndividual();
getJsonProjects();