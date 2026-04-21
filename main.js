// Nav: solid background on scroll
const nav = document.getElementById('mainNav');
if (nav) {
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 30);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// Nav: mobile hamburger toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.getElementById('navLinks');
if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (!nav.contains(e.target)) {
      navLinks.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// Resume metadata: inject last_updated date from data/resume_meta.json
fetch('data/resume_meta.json')
  .then(r => r.json())
  .then(data => {
    if (!data.last_updated) return;
    document.querySelectorAll('.resume-date').forEach(el => {
      el.textContent = `· ${data.last_updated}`;
    });
  })
  .catch(() => {});
