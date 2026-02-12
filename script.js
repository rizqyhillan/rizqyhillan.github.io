function showSection(id,el){
  document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  document.querySelectorAll('.menu-item').forEach(m=>m.classList.remove('active'));
  el.classList.add('active');
}