

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

getJsonIndividual();