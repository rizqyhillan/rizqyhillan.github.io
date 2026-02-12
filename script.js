

/* ===== DATABASE SERVER ===== */

const servers = [

  {
    name: "Personal",
    profile: "Ini adalah portfolio personal saya.",
    creation: "Website portfolio & eksperimen UI.",
    skill: "HTML, CSS, JavaScript, Linux.",
    contact: "Email: personal@email.com",
    projects: [
      {title:"Portfolio UI", desc:"Sedang dikembangkan"},
      {title:"UI Experiments", desc:"Testing design"}
    ]
  },

  {
    name: "Campus",
    profile: "Portfolio akademik kampus.",
    creation: "Tugas praktikum & project kuliah.",
    skill: "Laravel, Git, Database.",
    contact: "Email: kampus@email.com",
    projects: [
      {title:"Laravel App", desc:"Project kampus"},
      {title:"Web Praktikum", desc:"Submission tugas"}
    ]
  },

  {
    name: "Fun",
    profile: "Project hobi & eksperimen.",
    creation: "Game kecil & UI unik.",
    skill: "Creative coding.",
    contact: "Discord: usernamekamu",
    projects: [
      {title:"Fun UI", desc:"Eksperimen visual"},
      {title:"Mini Game", desc:"Prototype"}
    ]
  }

];

/* ===== STATE ===== */

let currentServer = 0;
let currentSection = "profile";

/* ===== RENDER CONTENT ===== */

function renderContent(){

  const data = servers[currentServer];

  document.getElementById("serverTitle").textContent = data.name;

  document.getElementById("profile").innerHTML =
    `<div class="card"><h3>Profile</h3><p>${data.profile}</p></div>`;

  document.getElementById("creation").innerHTML =
    `<div class="card"><h3>Creation</h3><p>${data.creation}</p></div>`;

  document.getElementById("skill").innerHTML =
    `<div class="card"><h3>Skill</h3><p>${data.skill}</p></div>`;

  document.getElementById("contact").innerHTML =
    `<div class="card"><h3>Contact</h3><p>${data.contact}</p></div>`;

  const projectPanel = document.getElementById("projectPanel");
  projectPanel.innerHTML = "";

  data.projects.forEach(p=>{
    projectPanel.innerHTML +=
      `<div class="project-card">
        <h4>${p.title}</h4>
        <p>${p.desc}</p>
      </div>`;
  });
}

/* ===== SWITCH SERVER ===== */

function switchServer(index){

  currentServer = index;

  document.querySelectorAll('.server-icon')
    .forEach(s=>s.classList.remove('active'));

  document.querySelectorAll('.server-icon')[index]
    .classList.add('active');

  renderContent();
}

/* ===== SWITCH SECTION ===== */

function showSection(id,el){

  currentSection = id;

  document.querySelectorAll('.section')
    .forEach(s=>s.classList.remove('active'));

  document.getElementById(id).classList.add('active');

  document.querySelectorAll('.menu-item')
    .forEach(m=>m.classList.remove('active'));

  el.classList.add('active');
}

/* INIT */

renderContent();
