

/* ===== DATABASE SERVER ===== */

const servers = [

  {
  name: "Personal",
  photo: "pro1.jpeg",
  profile: "Hi! Saya Muhammad Rizqy Hillan Al Farizy, seorang tech enthusiast yang gemar mengutak-atik sistem, membangun web interface, dan mengeksplorasi dunia Linux. Saya memiliki ketertarikan besar pada bagaimana teknologi bekerja di balik layar, mulai dari struktur sistem operasi hingga desain antarmuka yang nyaman digunakan. Bagi saya, setiap proyek adalah kesempatan untuk menggabungkan logika, kreativitas, dan estetika menjadi sebuah solusi yang fungsional sekaligus menarik secara visual.<br> Saya menikmati proses belajar yang berkelanjutan, mencoba teknologi baru, dan mengasah kemampuan melalui berbagai eksperimen serta proyek pengembangan. Fokus utama saya berada pada pengembangan web, eksplorasi sistem Linux, serta peningkatan pemahaman tentang cara kerja perangkat lunak secara menyeluruh. Setiap baris kode yang saya tulis adalah ruang untuk bereksperimen, memecahkan masalah, dan terus berkembang menjadi developer yang lebih baik.<br> Melalui portfolio ini, saya mendokumentasikan perjalanan belajar dan karya yang telah saya bangun — sebagai representasi semangat saya dalam dunia teknologi: terus belajar, beradaptasi, dan menciptakan sesuatu yang bermanfaat.",
  creation: "Saya pernah merancang Prototype website KUA sebagai eksplorasi desain antarmuka dan struktur web modern. Proyek ini berfokus pada pembuatan tampilan yang bersih, mudah digunakan, serta responsif di berbagai perangkat. Selain itu, saya juga menggunakan proyek ini sebagai media eksperimen untuk mengasah kemampuan dalam pengembangan front-end dan perancangan pengalaman pengguna.",
  skill: "Saya memiliki kemampuan dalam pengembangan web menggunakan PHP, CSS, JavaScript, dan Dart, serta pemahaman dasar UI/UX design untuk menciptakan antarmuka yang nyaman digunakan. Selain itu, saya juga memiliki keterampilan umum sebagai mahasiswa IT semester 4, seperti pemrograman dasar hingga menengah, pengelolaan database dasar, penggunaan Git untuk version control, pemahaman struktur data dasar, serta dasar-dasar rekayasa perangkat lunak. Saya terbiasa bekerja dengan Linux sebagai lingkungan pengembangan sehari-hari.",
  contact: "Email: personal@email.com",
  projects: [
    {title:"Portfolio UI", desc:"Sedang dikembangkan"},
    {title:"UI Experiments", desc:"Testing design"}
  ]
},


  {
    name: "Campus",
    photo: "pro2.jpeg",
    profile: "Saya merupakan mahasiswa di bidang teknologi informasi yang berfokus pada pengembangan kemampuan akademik dalam pemrograman dan rekayasa perangkat lunak. Selama perkuliahan, saya terlibat dalam berbagai proyek yang bertujuan menerapkan konsep teori ke dalam praktik nyata, khususnya dalam pengembangan aplikasi berbasis web dan pengelolaan sistem informasi. Saya terus mengembangkan kemampuan analisis, pemecahan masalah, serta kerja sama tim sebagai bagian dari proses pembelajaran profesional di lingkungan akademik.",
    creation: "Beberapa proyek akademik yang telah saya kerjakan antara lain aplikasi kasir Pupuk Tani Maju yang dirancang untuk membantu pengelolaan transaksi dan pencatatan penjualan secara efisien, serta aplikasi pembelajaran CodePlay yang bertujuan mendukung proses belajar pemrograman secara interaktif. Kedua proyek ini membantu saya memahami pengembangan aplikasi berbasis kebutuhan nyata serta kerja tim dalam lingkungan akademik.",
    skill: "Aku Memiliki kompetensi akademik dalam pemrograman web (PHP, JavaScript, CSS), perancangan antarmuka pengguna, serta dasar pengelolaan database. Memahami konsep struktur data dasar, algoritma, rekayasa perangkat lunak, dan version control menggunakan Git. Terbiasa mengerjakan proyek berbasis tim dalam lingkungan akademik, termasuk dokumentasi teknis dan pengembangan aplikasi sesuai kebutuhan studi.",
    contact: "Email: kampus@email.com",
    projects: [
      {title:"Laravel App", desc:"Project kampus"},
      {title:"Web Praktikum", desc:"Submission tugas"}
    ]
  },

  {
    name: "Fun",
    photo: "pro3.jpeg",
    profile: "Bagian ini adalah ruang eksperimen saya. Saya suka mencoba hal-hal baru di dunia teknologi, mulai dari ngoprek Linux, kustomisasi tampilan sistem, sampai bikin proyek kecil hanya untuk seru-seruan. Buat saya, belajar teknologi nggak harus selalu serius — kadang justru dari eksperimen iseng muncul ide dan pemahaman baru yang nggak terduga.",
    creation: "Di luar proyek formal, saya juga sering membuat website ucapan ulang tahun sebagai bentuk eksplorasi kreativitas. Proyek-proyek ini biasanya berfokus pada animasi, desain visual yang menarik, serta pengalaman pengguna yang menyenangkan, sekaligus menjadi sarana untuk bereksperimen dengan ide-ide baru.",
    skill: "Aktif mengeksplorasi dunia Linux melalui kustomisasi sistem, konfigurasi lingkungan desktop, dan eksperimen dengan berbagai tools open-source. Menikmati kegiatan mengutak-atik sistem, mencoba distribusi Linux yang berbeda, serta mengeksplorasi teknologi baru sebagai sarana belajar mandiri dan pengembangan kreativitas.",
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
  `<div class="card">
        <h3>Profile</h3>

        <div class="profile-wrapper">
            <img src="${data.photo}" class="profile-img">
            <p>${data.profile}</p>
        </div>

    </div>`;



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

function openPopup(){
  document.getElementById("profilePopup").style.display = "flex";
}

function closePopup(){
  document.getElementById("profilePopup").style.display = "none";
}

/* INIT */

renderContent();
