const siteConfig = {
  bookingUrl: "https://mediacircle.s1.boothbook.com",
  phoneDisplay: "833-847-6609",
  phoneHref: "tel:8338476609",
  email: "info@mediacircle.io",
  address: "Stonecrest, Georgia serving metro Atlanta",
  home: "index.html",
  navItems: [
    { key: "home", label: "Home", href: "index.html" },
    { key: "photography", label: "Photography", href: "pages/photography.html" },
    { key: "cinematography", label: "Videography", href: "pages/cinematography.html" },
    { key: "weddings", label: "Weddings", href: "pages/weddings.html" },
    { key: "corporate", label: "Corporate", href: "pages/corporate-events.html" },
    { key: "booths", label: "Photo Booths", href: "pages/photo-booths.html" },
    { key: "prom", label: "Prom & Graduation", href: "pages/prom-graduation.html" },
    { key: "portfolio", label: "Portfolio", href: "pages/portfolio.html" },
    { key: "blog", label: "Blog", href: "pages/blog.html" },
    { key: "quote", label: "Quote", href: "pages/contact.html" }
  ]
};

function withRoot(root, href) {
  if (/^(https?:|mailto:|tel:|#)/.test(href)) return href;
  return root === "." ? href : `${root}/${href}`;
}

function buildHeader(root, currentPage) {
  const navLinks = siteConfig.navItems
    .map((item) => {
      const active = item.key === currentPage ? "active" : "";
      const current = item.key === currentPage ? ' aria-current="page"' : "";
      return `<a class="${active}"${current} href="${withRoot(root, item.href)}">${item.label}</a>`;
    })
    .join("");

  return `
    <a class="skip-link" href="#main-content">Skip to content</a>
    <div class="topbar">
      <div class="container nav">
        <a class="brand" href="${withRoot(root, siteConfig.home)}" aria-label="Media Circle home">
          <img class="brand-logo" src="${withRoot(root, "assets/media-circle-logo.png")}" alt="Media Circle logo">
        </a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-menu" aria-label="Toggle navigation">Menu</button>
        <div class="nav-menu" id="site-menu">
          <nav class="nav-links" aria-label="Primary">
            ${navLinks}
          </nav>
        </div>
        <div class="nav-actions">
          <a class="button button-secondary" href="${siteConfig.phoneHref}">${siteConfig.phoneDisplay}</a>
          <a class="button button-primary" href="${siteConfig.bookingUrl}" target="_blank" rel="noreferrer">Book Here</a>
        </div>
      </div>
    </div>
  `;
}

function buildFooter(root) {
  return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <a class="brand" href="${withRoot(root, siteConfig.home)}" aria-label="Media Circle home">
              <img class="brand-logo" src="${withRoot(root, "assets/media-circle-logo.png")}" alt="Media Circle logo">
              <span class="brand-copy">
                Media Circle
                <small>Luxury event coverage and booth experiences</small>
              </span>
            </a>
            <p style="margin-top: 1rem;">Premium photography, videography, and booth activations for weddings, prom send-offs, graduations, and events throughout metro Atlanta.</p>
          </div>
          <div>
            <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">Explore</h3>
            <div class="footer-list">
              <a href="${withRoot(root, "pages/weddings.html")}">Weddings</a>
              <a href="${withRoot(root, "pages/corporate-events.html")}">Corporate</a>
              <a href="${withRoot(root, "pages/photo-booths.html")}">Photo Booths</a>
              <a href="${withRoot(root, "pages/prom-graduation.html#prom-packages")}">Prom & Graduation</a>
              <a href="${withRoot(root, "pages/blog.html")}">Blog</a>
            </div>
          </div>
          <div>
            <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">Contact</h3>
            <div class="footer-list">
              <a href="${siteConfig.phoneHref}">${siteConfig.phoneDisplay}</a>
              <a href="mailto:${siteConfig.email}">${siteConfig.email}</a>
              <span>${siteConfig.address}</span>
              <a href="${siteConfig.bookingUrl}" target="_blank" rel="noreferrer">Check Availability</a>
            </div>
          </div>
          <div>
            <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">Need A Date?</h3>
            <p>Most premium event weekends book in advance. Start with availability so the right collection is still open.</p>
            <div style="margin-top: 1rem;">
              <a class="button button-gold" href="${siteConfig.bookingUrl}" target="_blank" rel="noreferrer">Reserve Your Date</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <span>&copy; <span id="current-year"></span> Media Circle. All rights reserved.</span>
          <span class="footer-legal-links">
            <a href="${withRoot(root, "pages/privacy-policy.html")}">Privacy Policy</a>
            <a href="${withRoot(root, "pages/terms-of-use.html")}">Terms of Use</a>
          </span>
          <span>Designed for a premium mobile-first experience on mediacircle.io.</span>
        </div>
      </div>
    </footer>
  `;
}

function initMenu() {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".nav-menu");
  if (!toggle || !menu) return;
  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function initReveal() {
  const revealEls = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || !revealEls.length) {
    revealEls.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach((el) => observer.observe(el));
}

function initPackageBookingCards() {
  const packageCards = document.querySelectorAll(".pricing-card");
  packageCards.forEach((card) => {
    if (card.dataset.bookingEnhanced === "true") return;

    const heading = card.querySelector("h3");
    const packageName = heading ? heading.textContent.trim() : "this package";
    const bookingLabel = `Book ${packageName}`;

    card.dataset.bookingEnhanced = "true";
    card.dataset.bookingUrl = card.dataset.bookingUrl || siteConfig.bookingUrl;
    card.classList.add("pricing-card-bookable");

    if (!card.querySelector(".package-booking-action")) {
      const action = document.createElement("a");
      action.className = "button button-gold package-booking-action";
      action.href = card.dataset.bookingUrl;
      action.target = "_blank";
      action.rel = "noreferrer";
      action.textContent = "Book Now";
      action.setAttribute("aria-label", bookingLabel);
      card.appendChild(action);
    }

    card.addEventListener("click", (event) => {
      if (event.target.closest("a, button, input, textarea, select, summary")) return;
      window.open(card.dataset.bookingUrl, "_blank", "noopener,noreferrer");
    });

  });
}

document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const root = body.dataset.root || ".";
  const page = body.dataset.page || "";
  const headerMount = document.querySelector("[data-site-header]");
  const footerMount = document.querySelector("[data-site-footer]");
  if (headerMount) headerMount.innerHTML = buildHeader(root, page);
  if (footerMount) footerMount.innerHTML = buildFooter(root);
  initMenu();
  initReveal();
  initPackageBookingCards();
  const year = document.getElementById("current-year");
  if (year) year.textContent = String(new Date().getFullYear());
});
