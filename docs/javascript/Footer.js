const footer = document.getElementById("footer");

if (footer) {
  footer.innerHTML = `
  <footer id="contact-us" data-aos="fade-up" class="bg-[linear-gradient(135deg,#16253F_0%,#1A2B4C_52%,#233A61_100%)] text-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="border-b border-white/10 py-10 sm:py-12">
        <div class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div class="max-w-3xl">
            <p class="text-sm font-semibold uppercase tracking-[0.28em] text-[#4DB6AC]">Predict • Prevent • Preserve</p>
            <h2 class="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Care designed to keep families supported at every stage.</h2>
            <p class="mt-4 max-w-2xl text-sm leading-7 text-white/72 sm:text-base">
              From prevention programs and personal Sahayaks to virtual consultations and provider support,
              the platform is built to make healthcare easier to navigate and easier to trust.
            </p>
          </div>

          <div class="flex flex-col gap-3 sm:flex-row">
            <a href="#gift-health" class="inline-flex items-center justify-center rounded-full bg-[#4DB6AC] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#66c4bb]">
              Explore Programs
            </a>
            <a href="#contact-us" class="inline-flex items-center justify-center rounded-full border border-[#74A7FF]/40 bg-[#74A7FF] px-6 py-3 text-sm font-semibold text-[#1A2B4C] transition hover:brightness-95">
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <div class="grid gap-10 py-12 lg:grid-cols-12 lg:gap-12 lg:py-14">
        <div class="lg:col-span-5">
          <a href="index.html" class="inline-flex items-center">
            <img src="./docs/assets/logo.png" alt="Preventia360 logo" class="h-14 w-auto object-contain sm:h-16" />
          </a>

          <p class="mt-5 max-w-xl text-sm leading-7 text-white/72 sm:text-base">
            Preventia360 connects families with proactive health journeys through wellness programs, dedicated care coordinators,
            virtual access, and a support system that stays with them beyond a single appointment.
          </p>

          <div class="mt-6 flex flex-wrap gap-2">
            <span class="rounded-full border border-[#4DB6AC]/30 bg-[#4DB6AC]/10 px-3 py-2 text-xs font-semibold text-white">Preventive Care</span>
            <span class="rounded-full border border-[#74A7FF]/25 bg-[#74A7FF]/10 px-3 py-2 text-xs font-semibold text-[#74A7FF]">Dedicated Sahayaks</span>
            <span class="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-white/82">Virtual Consultations</span>
            <span class="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-white/82">Family Wellness</span>
          </div>

          <div class="mt-8 flex flex-wrap gap-3">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" class="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-white/6 text-white transition hover:border-[#4DB6AC]/40 hover:bg-[#4DB6AC]/12 hover:text-[#4DB6AC]" aria-label="Facebook">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" class="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-white/6 text-white transition hover:border-[#4DB6AC]/40 hover:bg-[#4DB6AC]/12 hover:text-[#4DB6AC]" aria-label="Instagram">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" class="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-white/6 text-white transition hover:border-[#4DB6AC]/40 hover:bg-[#4DB6AC]/12 hover:text-[#4DB6AC]" aria-label="LinkedIn">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" class="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-white/6 text-white transition hover:border-[#4DB6AC]/40 hover:bg-[#4DB6AC]/12 hover:text-[#4DB6AC]" aria-label="YouTube">
              <i class="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>

        <div class="lg:col-span-7">
          <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            <div>
              <p class="text-sm font-semibold uppercase tracking-[0.22em] text-white/45">Programs</p>
              <ul class="mt-4 space-y-3 text-sm text-white/72">
                <li><a class="transition hover:text-[#4DB6AC]" href="#gift-health">Gift Health</a></li>
                <li><a class="transition hover:text-[#4DB6AC]" href="#fit2fly">Fit2Fly</a></li>
                <li><a class="transition hover:text-[#4DB6AC]" href="#sahayak">Sahayak</a></li>
                <li><a class="transition hover:text-[#4DB6AC]" href="#call-on-doc">Call-On-Doc</a></li>
                <li><a class="transition hover:text-[#4DB6AC]" href="#careers">Providers</a></li>
              </ul>
            </div>

            <div>
              <p class="text-sm font-semibold uppercase tracking-[0.22em] text-white/45">Quick Links</p>
              <ul class="mt-4 space-y-3 text-sm text-white/72">
                <li><a class="transition hover:text-[#4DB6AC]" href="#contact-us">Contact Us</a></li>
                <li><a class="transition hover:text-[#4DB6AC]" href="#faq">FAQ</a></li>
                <li><a class="transition hover:text-[#4DB6AC]" href="#careers">Careers</a></li>
                <li><a class="transition hover:text-[#4DB6AC]" href="#testimonials">Testimonials</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="border-t border-white/10 py-5">
        <div class="flex flex-col gap-3 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p class="text-sm text-white/55">&copy; <span id="yearNow"></span> Preventia360. All rights reserved.</p>
          <p class="text-sm text-white/45">Built around family wellness, convenience, and proactive care.</p>
        </div>
      </div>
    </div>

    <script>
      (function () {
        const y = document.getElementById("yearNow");
        if (y) y.textContent = String(new Date().getFullYear());
      })();
    </script>
  </footer>
  `;
}





