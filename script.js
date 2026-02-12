const sections = document.querySelectorAll('section');
    const ws = document.querySelectorAll('.ws');

    window.addEventListener('scroll', () => {
      let index = 0;

      sections.forEach((section, i) => {
        const top = section.offsetTop - 200;
        if (scrollY >= top) index = i;
      });

      ws.forEach(w => w.classList.remove('active'));
      if (ws[index]) ws[index].classList.add('active');
    });