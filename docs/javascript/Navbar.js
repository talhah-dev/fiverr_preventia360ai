const navbar = document.getElementById("navbar");

const desktopNavLinks = [
  { href: "coming-soon.html", label: "Gift Health" },
  { href: "coming-soon.html", label: "Fit2Fly" },
  { href: "coming-soon.html", label: "Book a Sahayak" },
  { href: "coming-soon.html", label: "Call-On-Doc" }
];

const mobileNavLinks = [
  { href: "coming-soon.html", label: "Gift Health" },
  { href: "coming-soon.html", label: "Fit2Fly" },
  { href: "coming-soon.html", label: "Book a Sahayak" },
  { href: "coming-soon.html", label: "Call-On-Doc" },
  { href: "provider-network.html", label: "Providers" }
];

const desktopLinks = desktopNavLinks
  .map((link) => `<li><a class="navLink transition" href="${link.href}">${link.label}</a></li>`)
  .join("");

const mobileLinks = mobileNavLinks
  .map(
    (link) => `<li><a class="flex items-center rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 transition hover:bg-[#F5F7FA]" href="${link.href}">${link.label}</a></li>`
  )
  .join("");

if (navbar) {
  navbar.innerHTML = `
    <header id="siteHeader" class="fixed inset-x-0 top-0 z-50 bg-transparent border-transparent shadow-none backdrop-blur-0 transition-all duration-300">
      <div id="navContainer" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-300">
        <div id="navBar" class="flex items-center justify-between gap-4 py-4 transition-all duration-300">
          <a href="index.html" class="inline-flex shrink-0 items-center">
            <img id="brandLogo" src="./docs/assets/logo.png" alt="Preventia360 logo" class="h-11 w-auto object-contain sm:h-12" />
          </a>

          <nav class="hidden md:block">
            <ul class="flex items-center justify-center gap-8 lg:gap-12 text-sm font-medium text-slate-900">
              ${desktopLinks}
            </ul>
          </nav>

          <div class="hidden md:flex items-center gap-3 shrink-0">
            <a href="provider-network.html" id="providerBtn" class="inline-flex rounded-full items-center justify-center border border-slate-200 bg-[#F5F7FA] px-5 py-2.5 text-sm font-semibold text-[#1A2B4C] transition hover:border-[#4DB6AC]/35 hover:text-[#4DB6AC]">
              Providers
            </a>
            <a href="coming-soon.html" id="ctaBtn" class="inline-flex rounded-full items-center justify-center bg-[#1A2B4C] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#233A61]">
              Login/Sign Up
            </a>
          </div>

          <button
            id="menuBtn"
            type="button"
            aria-label="Open menu"
            aria-expanded="false"
            class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-[#F5F7FA] text-slate-900 shadow-sm transition hover:bg-white md:hidden"
          >
            <i class="fa-solid fa-bars text-base"></i>
          </button>
        </div>
      </div>
    </header>

    <div aria-hidden="true" class="h-[86px] sm:h-[92px]"></div>

    <div id="menuOverlay" class="fixed inset-0 z-[60] hidden bg-slate-950/45 opacity-0 transition-opacity duration-300"></div>

    <aside
      id="menuPanel"
      class="fixed left-0 top-0 z-[70] h-full w-[88%] max-w-sm -translate-x-full overflow-y-auto bg-white shadow-2xl shadow-slate-900/15 transition-transform duration-300 ease-out"
      aria-hidden="true"
    >
      <div class="flex items-center justify-between border-b border-slate-200 px-5 py-5">
        <a href="index.html" class="inline-flex items-center">
          <img src="./docs/assets/logo.png" alt="Preventia360 logo" class="h-11 w-auto object-contain" />
        </a>

        <button
          id="closeBtn"
          type="button"
          aria-label="Close menu"
          class="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-[#F5F7FA] text-slate-900 transition hover:bg-slate-100 active:scale-[0.98]"
        >
          <i class="fa-solid fa-xmark text-lg"></i>
        </button>
      </div>

      <div class="px-5 py-6">
        <nav>
          <ul class="space-y-2">
            ${mobileLinks}
          </ul>
        </nav>

        <div class="mt-6 grid gap-3">
          <a href="provider-network.html" class="inline-flex w-full items-center rounded-xl justify-center border border-slate-200 bg-[#F5F7FA] px-5 py-3 text-sm font-semibold text-[#1A2B4C] transition hover:border-[#4DB6AC]/35 hover:text-[#4DB6AC]">
            Providers
          </a>
          <a href="coming-soon.html" class="inline-flex w-full items-center rounded-xl justify-center bg-[#1A2B4C] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#233A61]">
            Login/Sign Up
          </a>
        </div>
      </div>
    </aside>
  `;
}

const siteHeader = document.getElementById("siteHeader");
const menuBtnEl = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("menuOverlay");
const panel = document.getElementById("menuPanel");

const lockScroll = () => {
  document.documentElement.style.overflow = "hidden";
  document.body.style.overflow = "hidden";
};

const unlockScroll = () => {
  document.documentElement.style.overflow = "";
  document.body.style.overflow = "";
};

const setMenuClosed = (immediate = false) => {
  if (!overlay || !panel) return;
  if (immediate) {
    overlay.style.transition = "none";
    panel.style.transition = "none";
  }
  overlay.classList.add("hidden", "opacity-0");
  overlay.classList.remove("opacity-100");
  panel.classList.add("-translate-x-full");
  panel.classList.remove("translate-x-0");
  panel.style.transform = "translateX(-100%)";
  panel.setAttribute("aria-hidden", "true");
  if (menuBtnEl) menuBtnEl.setAttribute("aria-expanded", "false");
  unlockScroll();
  if (immediate) {
    overlay.offsetHeight;
    panel.offsetHeight;
    overlay.style.transition = "";
    panel.style.transition = "";
  }
};

const openMenu = () => {
  if (!overlay || !panel) return;
  overlay.classList.remove("hidden");
  lockScroll();
  panel.setAttribute("aria-hidden", "false");
  if (menuBtnEl) menuBtnEl.setAttribute("aria-expanded", "true");
  requestAnimationFrame(() => {
    overlay.classList.remove("opacity-0");
    overlay.classList.add("opacity-100");
    panel.classList.remove("-translate-x-full");
    panel.classList.add("translate-x-0");
    panel.style.transform = "translateX(0)";
  });
};

const closeMenu = () => {
  if (!overlay || !panel) return;
  overlay.classList.add("opacity-0");
  overlay.classList.remove("opacity-100");
  panel.classList.add("-translate-x-full");
  panel.classList.remove("translate-x-0");
  panel.style.transform = "translateX(-100%)";
  panel.setAttribute("aria-hidden", "true");
  if (menuBtnEl) menuBtnEl.setAttribute("aria-expanded", "false");
  unlockScroll();
  setTimeout(() => overlay.classList.add("hidden"), 300);
};

const syncHeaderState = () => {
  if (!siteHeader) return;

  if (window.scrollY > 8) {
    siteHeader.className = "fixed inset-x-0 top-0 z-50 bg-white/96 border-b border-slate-200/80 backdrop-blur transition-all duration-300 shadow-[0_18px_40px_rgba(15,23,42,0.08)]";
  } else {
    siteHeader.className = "fixed inset-x-0 top-0 z-50 bg-transparent border-transparent shadow-none backdrop-blur-0 transition-all duration-300";
  }
};

if (menuBtnEl) menuBtnEl.addEventListener("click", openMenu);
if (closeBtn) closeBtn.addEventListener("click", closeMenu);
if (overlay) overlay.addEventListener("click", closeMenu);
window.addEventListener("keydown", (e) => e.key === "Escape" && closeMenu());
window.addEventListener("scroll", syncHeaderState, { passive: true });
syncHeaderState();
setMenuClosed(true);
