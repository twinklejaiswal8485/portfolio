function create(tag) {
    return document.createElement(tag);
}

const skills = [
    {
        name: 'JavaScript',
        img: 'https://res.cloudinary.com/djrfrqyk9/image/upload/v1715023394/my%20portfolio/js_lw0k46.png'
    },
    {
        name: 'Java',
        img: 'https://nerdysoft.com/wp-content/uploads/2021/11/java-14-1.svg'
    },
    
    {
        name: "SQL",
        img: "https://res.cloudinary.com/djrfrqyk9/image/upload/v1720769886/my%20portfolio/sql-server_solsaf.png"
    },
    {
        name: 'React',
        img: 'https://res.cloudinary.com/djrfrqyk9/image/upload/v1715023400/my%20portfolio/physics_mygmxi.png'
    },
    
    {
        name: "Redux",
        img: "https://res.cloudinary.com/djrfrqyk9/image/upload/v1720769887/my%20portfolio/redux_f3v76f.png"
    },
    {
        name: "jQuery",
        img: "https://cdn.iconscout.com/icon/free/png-256/free-jquery-8-1175153.png?f=webp"
    },
    {
        name: 'Bootstrap 5',
        img: 'https://res.cloudinary.com/djrfrqyk9/image/upload/v1715023397/my%20portfolio/media_lvc3x1.png'
    },
    {
        name: 'HTML 5',
        img: 'https://res.cloudinary.com/djrfrqyk9/image/upload/v1715023391/my%20portfolio/html_z8wlqb.png'
    },
    {
        name: 'CSS 3',
        img: 'https://res.cloudinary.com/djrfrqyk9/image/upload/v1715023386/my%20portfolio/css-3_fdscef.png'
    },
    
    {
        name: 'Tailwind CSS',
        img: 'https://res.cloudinary.com/djrfrqyk9/image/upload/v1715023406/my%20portfolio/tailwind_veeehf.png'
    },
    {
        name: 'Node.js',
        img: 'https://cdn.iconscout.com/icon/free/png-256/free-node-js-1174925.png?f=webp&w=256'
    },
    {
        name: 'Express.js',
        img: 'https://images.credly.com/images/1c2c86e1-16ce-4e4d-a425-d1ac96bb026d/express.png'
    },
    
    {
        name: "MongoDB",
        img: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"
    },
    {
        name: "MySQL",
        img: "https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.png"
    },
    {
        name: "PostgreSQL",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png"
    },
    {
        name: "MS SQL Server",
        img: "https://www.geekandjob.com/uploads/wiki/43b8c92d2a8fcd2a95ae6bf30c18494dae92467a.png"
    },
    {
        name: "Postman",
        img: "https://res.cloudinary.com/djrfrqyk9/image/upload/v1720769885/my%20portfolio/postman_tksplm.png"
    },
    {
        name: 'Git',
        img: 'https://res.cloudinary.com/djrfrqyk9/image/upload/v1715023404/my%20portfolio/social_comwro.png'
    },
    {
        name: 'Github',
        img: 'https://res.cloudinary.com/djrfrqyk9/image/upload/v1715026767/my%20portfolio/github_kuzevs.png'
    },

]

let skillsDiv = document.getElementById('skillsDiv');
function skillcard(skill) {
    let div = document.createElement('div');
    let img = document.createElement('img');
    let span = document.createElement('span');

    img.src = skill.img;
    img.alt = skill.name;

    span.textContent = skill.name;

    div.classList.add('skill1');
    div.appendChild(img);
    div.appendChild(span);

    skillsDiv.appendChild(div);

}


skills.forEach(skill => {
    skillcard(skill);
});


// const certificates = [
//     {
//         name: 'Angular',
//         img: 'assets/img/angular.webp'
//     },
//     {
//         name: 'NEC',
//         img: 'assets/img/nec.webp'
//     },
//     {
//         name: 'DSA',
//         img: 'assets/img/dsa.webp'
//     },
    
// ]
const cerDiv = document.getElementById('cerDiv');

function certficatesDiv(cert) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    let a = document.createElement('a');
    div.classList.add('cert');

    img.src = cert.img;
    img.alt = cert.name;
    img.classList.add('certImg')

    a.href = cert.img;
    a.target = '_blank'
    div.appendChild(img);
    a.appendChild(div);
    cerDiv.appendChild(a);
}

// certificates.forEach(cer => {
//     certficatesDiv(cer);

// });


const projects = [
   
    {
        name: "PregleAI Library",
        img: "assets/img/work-3.webp",
        code: "",
        live: "https://library.pregleai.com/"
    },
    {
        name: "Rivotta",
        img: "assets/img/work-4.webp",
        code: "",
        live: "https://www.rivotta.com/"
    },
    
    

]

let pNumber = document.getElementById('projectCount');
pNumber.textContent = projects.length

const projectD = document.getElementById('projectDiv');
function projectDiv(project) {
    let pDiv = create('div');
    let newPage = '';
    if (project.code !== '#') {
        newPage = target = "_blank";
    }

    pDiv.innerHTML = `
    
    
    <div class="project-item  active" >
    <div class="project-img">
      <div class="icon-hover">
        <a href=${project.live} target="_blank">
          <div class="project-item-icon-box">
            <ion-icon name="eye-outline"></ion-icon> 
          </div>
        </a>
      </div>
      <img src=${project.img} alt=${project.name} loading="lazy">
    </div>

    <h3 class="project-title">${project.name}</h3>
    <!-- <p class="project-category">Web development</p> -->
</div>   
    
    `

    projectD.appendChild(pDiv);
}

projects.forEach(project => {
    projectDiv(project);
});