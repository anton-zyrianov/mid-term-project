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
         res.forEach((data, index) => {
            if(index < 3) {
               document.querySelector('.cajas-global').appendChild(document.querySelector('.cajas-global').innerHTML = `
               <div class="caja-proyecto">
                  <img class="project" src="/img/recent-projects.jpeg" alt="Recent Projects">
                  <h4>${data.title}</h4>
                  <p>${data.body}</p>
                  <a href="./project.html">Learn more</a>
               </div>`);

            }
         })
      });
}

getJsonIndividual();
getJsonProjects();