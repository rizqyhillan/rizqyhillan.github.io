function showSection(id, el) {
      document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
      document.getElementById(id).classList.add('active');

      document.querySelectorAll('.channel').forEach(c => c.classList.remove('active'));
      el.classList.add('active');

      document.getElementById('topbar-title').textContent = '# ' + id;
    }