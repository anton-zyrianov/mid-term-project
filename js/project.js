const buttonBurger = document.getElementById('button-menu');
const navBurger = document.getElementById('nav-burger');
const lockScroll = document.body;

buttonBurger.addEventListener('click', () => {
   buttonBurger.classList.toggle('active');
   navBurger.classList.toggle('active');
   lockScroll.classList.toggle('lock');
});

const buttonQuestions = document.getElementById('submit');
const iconQuestions = document.querySelector('.questions-icono');

buttonQuestions.addEventListener('click', () => {
   iconQuestions.classList.toggle('clicked');
});

function getJsonIndividual() {
   fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((data) => {   
         document.querySelector(".proyecto-header-title").innerHTML = `${data.title}`;
         document.querySelector(".proyecto-description").innerHTML = `<p>${data.body}</p>`;
      });
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
                  <img class="project" src="img/recent-projects.jpeg" alt="Recent Projects">
                  <h4>${data.title}</h4>
                  <p>${data.body}</p>
                  <a href="./project.html">Learn more</a>`;
               
               recentProjects.appendChild(newElement);

            }
         })
      });
}

function sendEmail(event) {
   event.preventDefault(); 

   let mail = document.getElementById("e-mail").value;

   fetch("https://jsonplaceholder.typicode.com/posts", {     
   
   method: "POST",
   
   body: JSON.stringify({
      mail:mail,
   }),
   
   headers: {
      "Content-type": "application/json; charset=UTF-8"
   }
   })
   .then((response) => {

      if(response.status === 201){
         const elementSuccess = document.querySelector('.questions-success');
         elementSuccess.style.display = "block";

      } else {
         elementFailed = document.querySelector('.question-failed');
         elementFailed.style.display = "block";

      }

      return response.json();

   });

}

document.getElementById("form-index").addEventListener("submit", sendEmail);

getJsonProjects();

getJsonIndividual();
