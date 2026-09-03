/* ============================================================
   ICON FALLBACK — if Lucide CDN is unavailable
   ============================================================ */
const iconPaths = {
  'bar-chart-2': '<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',
  calculator: '<rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="8" y2="10"/><line x1="12" y1="10" x2="12" y2="10"/><line x1="16" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="8" y2="14"/><line x1="12" y1="14" x2="12" y2="14"/><line x1="16" y1="14" x2="16" y2="18"/>',
  check: '<polyline points="20 6 9 17 4 12"/>',
  'chevron-right': '<polyline points="9 18 15 12 9 6"/>',
  home: '<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/>',
  receipt: '<path d="M4 2v20l3-2 3 2 3-2 3 2 3-2 1 .7V2z"/><line x1="8" y1="7" x2="16" y2="7"/><line x1="8" y1="11" x2="16" y2="11"/><line x1="8" y1="15" x2="12" y2="15"/>',
  'shield-check': '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>',
  'shopping-cart': '<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h8.9a2 2 0 0 0 2-1.6L23 6H6"/>',
  sparkles: '<path d="M12 3l1.6 4.8L18 9.5l-4.4 1.7L12 16l-1.6-4.8L6 9.5l4.4-1.7z"/><path d="M19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8z"/><path d="M5 14l.8 2.2L8 17l-2.2.8L5 20l-.8-2.2L2 17l2.2-.8z"/>',
  'trending-up': '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',
  utensils: '<path d="M4 3v7"/><path d="M8 3v7"/><path d="M6 3v18"/><path d="M12 3v18"/><path d="M12 3c4 2 4 8 0 10"/>',
  'wallet-cards': '<rect x="3" y="6" width="18" height="14" rx="2"/><path d="M7 6V4a2 2 0 0 1 2-2h8v4"/><path d="M17 13h4"/>'
};

function createFallbackIcons() {
  document.querySelectorAll('i[data-lucide]').forEach(icon => {
    const name = icon.dataset.lucide;
    const path = iconPaths[name];
    if (!path) return;
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('aria-hidden', icon.getAttribute('aria-hidden') || 'true');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '1.5');
    svg.setAttribute('stroke-linecap', 'round');
    svg.setAttribute('stroke-linejoin', 'round');
    svg.innerHTML = path;
    icon.replaceWith(svg);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  if (typeof lucide === 'undefined') createFallbackIcons();
});

/* ============================================================
   NAVBAR — scroll shadow + hamburger
   ============================================================ */
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.navbar__hamburger');
const mobileMenu = document.querySelector('.navbar__mobile');
const mobileStickyCta = document.querySelector('.mobile-sticky-cta');

function updateScrollUi() {
  navbar?.classList.toggle('navbar--scrolled', window.scrollY > 10);
  mobileStickyCta?.classList.toggle('mobile-sticky-cta--visible', window.scrollY > 520);
}

window.addEventListener('scroll', updateScrollUi, { passive: true });
updateScrollUi();

hamburger?.addEventListener('click', () => {
  const open = hamburger.classList.toggle('open');
  mobileMenu?.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', String(open));
  document.body.style.overflow = open ? 'hidden' : '';
});

// Close mobile menu on link click
mobileMenu?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger?.classList.remove('open');
    mobileMenu?.classList.remove('open');
    hamburger?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

/* ============================================================
   ACTIVE NAV LINK
   ============================================================ */
const currentPath = window.location.pathname;
document.querySelectorAll('.navbar__links a, .navbar__mobile a').forEach(link => {
  if (link.getAttribute('href') === currentPath) link.classList.add('active');
});

/* ============================================================
   SCROLL ANIMATIONS — fade-up
   ============================================================ */
const style = document.createElement('style');
style.textContent = `
  .fade-up { opacity: 0; transform: translateY(24px); transition: opacity 0.5s ease, transform 0.5s ease; }
  .fade-up.visible { opacity: 1; transform: none; }
  .stagger .fade-up:nth-child(1) { transition-delay: 0.05s; }
  .stagger .fade-up:nth-child(2) { transition-delay: 0.12s; }
  .stagger .fade-up:nth-child(3) { transition-delay: 0.19s; }
  .stagger .fade-up:nth-child(4) { transition-delay: 0.26s; }
`;
document.head.appendChild(style);

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

/* ============================================================
   COUNT-UP — [data-count]
   ============================================================ */
const countObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const target = +el.dataset.count;
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    let current = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = prefix + Math.floor(current).toLocaleString('fr-FR') + suffix;
      if (current >= target) clearInterval(timer);
    }, 16);
    countObserver.unobserve(el);
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-count]').forEach(el => countObserver.observe(el));

/* ============================================================
   AVIS — filtres
   ============================================================ */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const seg = btn.dataset.segment;
    document.querySelectorAll('.avis-card').forEach(card => {
      card.style.display = (seg === 'tous' || card.dataset.segment === seg) ? '' : 'none';
    });
    if (typeof gtag !== 'undefined') gtag('event', 'avis_filter', { segment: seg });
  });
});

/* ============================================================
   CONFIRMATION PAGE — ?source=
   ============================================================ */
if (document.getElementById('confirm-title')) {
  const src = new URLSearchParams(window.location.search).get('source');
  const title = document.getElementById('confirm-title');
  const sub   = document.getElementById('confirm-sub');
  if (src === 'partenaire') {
    title.textContent = 'Votre demande a été reçue !';
    sub.textContent   = 'Notre équipe vous contactera sous 48h ouvrables.';
  }
}

/* ============================================================
   GA4 — CTA store tracking
   ============================================================ */
document.querySelectorAll('[data-cta-store]').forEach(btn => {
  btn.addEventListener('click', () => {
    if (typeof gtag === 'undefined') return;
    const event = btn.dataset.ctaStore === 'ios' ? 'cta_appstore_click' : 'cta_playstore_click';
    gtag('event', event, { location: btn.dataset.ctaLocation || 'unknown' });
  });
});
