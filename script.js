  const sections = document.querySelectorAll('section');
    const dots = document.querySelectorAll('.dot');

    window.addEventListener('scroll', () => {
      let index = 0;

      sections.forEach((section, i) => {
        const top = section.offsetTop - 200;
        if (scrollY >= top) index = i;
      });

      dots.forEach(dot => dot.classList.remove('active'));
      if (dots[index]) dots[index].classList.add('active');
    });