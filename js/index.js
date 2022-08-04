const buttonBurger = document.getElementById('button-menu');
const navBurger = document.getElementById('nav-burger');
const lockScroll = document.body;

buttonBurger.addEventListener('click', () => {
   buttonBurger.classList.toggle('active');
   navBurger.classList.toggle('active');
   lockScroll.classList.toggle('lock');
});

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

getJsonProjects();