(() => {
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('navLinks');
  const progress = document.getElementById('progress');
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  toggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
  });
  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
    toggle?.setAttribute('aria-label', 'Open navigation menu');
  }));

  const updateProgress = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (progress) progress.style.width = `${max > 0 ? window.scrollY / max * 100 : 0}%`;
  };
  window.addEventListener('scroll', updateProgress, {passive:true});
  updateProgress();

  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); obs.unobserve(entry.target); }
    }), {threshold:0.12});
    reveals.forEach(el => observer.observe(el));
    const sections = document.querySelectorAll('main section[id]');
    const anchors = document.querySelectorAll('.nav-links a[href^="#"]');
    const navObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) anchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${entry.target.id}`));
    }), {rootMargin:'-30% 0px -60% 0px'});
    sections.forEach(s => navObserver.observe(s));
  } else reveals.forEach(el => el.classList.add('visible'));
})();