const footer = document.getElementById("footer");

if (footer) {
  footer.innerHTML = `
  <footer data-aos="fade" class="bg-[linear-gradient(135deg,#07121f_0%,#0d2034_52%,#0c2b48_100%)] text-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="border-b border-white/10 py-10 sm:py-12">
        <div class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div class="max-w-3xl">
            <p class="text-sm font-semibold uppercase tracking-[0.28em] text-[#42d3c8]">Predict - Prevent - Preserve</p>
            <h2 class="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Care designed to keep families supported at every stage.</h2>
            <p class="mt-4 max-w-2xl text-sm leading-7 text-white/72 sm:text-base">
              From prevention programs and personal Sahayaks to virtual consultations and provider support,
              the platform is built to make healthcare easier to navigate and easier to trust.
            </p>
          </div>

          <div class="flex flex-col gap-3 sm:flex-row">
            <a href="#" class="inline-flex items-center justify-center rounded-full bg-[#42d3c8] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#64ddd4]">
              Get Started
            </a>
            <a href="#" class="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              Explore Programs
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
            <span class="rounded-full border border-[#42d3c8]/30 bg-[#42d3c8]/10 px-3 py-2 text-xs font-semibold text-[#8beddf]">Preventive Care</span>
            <span class="rounded-full border border-[#58a8ff]/25 bg-[#58a8ff]/10 px-3 py-2 text-xs font-semibold text-[#8bc2ff]">Dedicated Sahayaks</span>
            <span class="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-white/82">Virtual Consultations</span>
            <span class="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-white/82">Family Wellness</span>
          </div>
        </div>

        <div class="lg:col-span-7">
          <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p class="text-sm font-semibold uppercase tracking-[0.22em] text-white/45">Programs</p>
              <ul class="mt-4 space-y-3 text-sm text-white/72">
                <li><a class="transition hover:text-[#42d3c8]" href="#">Gift Health</a></li>
                <li><a class="transition hover:text-[#42d3c8]" href="#">Fit2Fly</a></li>
                <li><a class="transition hover:text-[#42d3c8]" href="#">Sahayak</a></li>
                <li><a class="transition hover:text-[#42d3c8]" href="#">Call-On-Doc</a></li>
                <li><a class="transition hover:text-[#42d3c8]" href="#">Providers</a></li>
              </ul>
            </div>

            <div>
              <p class="text-sm font-semibold uppercase tracking-[0.22em] text-white/45">Care Journey</p>
              <ul class="mt-4 space-y-3 text-sm text-white/72">
                <li><span class="transition hover:text-[#42d3c8]">Enroll into prevention</span></li>
                <li><span class="transition hover:text-[#42d3c8]">Meet your Sahayak</span></li>
                <li><span class="transition hover:text-[#42d3c8]">Book virtual consultations</span></li>
                <li><span class="transition hover:text-[#42d3c8]">Monitor health updates</span></li>
              </ul>
            </div>

            <div>
              <p class="text-sm font-semibold uppercase tracking-[0.22em] text-white/45">Why Families Choose Us</p>
              <ul class="mt-4 space-y-4 text-sm text-white/72">
                <li class="flex items-start gap-3">
                  <span class="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#42d3c8]/12 text-[#42d3c8]">
                    <i class="fa-solid fa-heart-pulse text-xs"></i>
                  </span>
                  <span>Prevention-first support with clearer next steps.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#58a8ff]/12 text-[#8bc2ff]">
                    <i class="fa-solid fa-user-doctor text-xs"></i>
                  </span>
                  <span>Direct coordination between families, Sahayaks, and providers.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/8 text-white/82">
                    <i class="fa-solid fa-shield-heart text-xs"></i>
                  </span>
                  <span>Continuous care visibility through the Preventia360 experience.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="border-t border-white/10 py-5">
        <div class="flex flex-col gap-3 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p class="text-sm text-white/55">� <span id="yearNow"></span> Preventia360. All rights reserved.</p>
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
