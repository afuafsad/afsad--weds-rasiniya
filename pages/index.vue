<template>
  <div class="min-h-screen flex items-center justify-center p-3 sm:p-6 md:p-8 relative overflow-hidden bg-islamic-pattern py-8">
    <!-- Glowing Background Accents -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 md:w-[500px] h-80 md:h-[500px] bg-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-5xl w-full text-center relative z-10 my-auto">
      <!-- Bismillah Header -->
      <div class="mb-6 space-y-2">
        <p class="font-amiri text-2xl sm:text-3xl md:text-5xl text-gold-300 leading-relaxed text-gold-glow">
          بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </p>
        <p class="text-[10px] sm:text-xs md:text-sm font-sans tracking-widest text-gold-200/80 uppercase">
          In the Name of Allah, the Most Gracious, the Most Merciful
        </p>
      </div>

      <!-- Main Outer Arch Frame Card -->
      <div class="arch-frame glass-card-gold p-4 sm:p-6 md:p-10 border border-gold-400/40 shadow-2xl space-y-6 sm:space-y-8">
        <div>
          <span class="inline-block px-3 py-1 rounded-full bg-emerald-900 border border-gold-400/30 text-gold-300 text-[10px] sm:text-xs font-cinzel font-bold uppercase tracking-widest mb-3">
            A Double Celebration of Love &amp; Brotherhood
          </span>
          <h1 class="font-cinzel text-2xl sm:text-4xl md:text-5xl font-extrabold text-gold-gradient tracking-wide mb-2">
            Wedding Invitations
          </h1>
          <p class="font-sans text-xs sm:text-sm md:text-base text-cream-200/90 max-w-xl mx-auto leading-relaxed px-2">
            Please select an invitation to view the event details &amp; confirm your RSVP for Sunday, 30th August 2026 at Atlantis Convention Centre, Vengara.
          </p>
        </div>

        <!-- Symmetrical Two Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-stretch pt-1">
          <!-- Choice 1: Afsad & Rasniya -->
          <NuxtLink
            to="/afsad-weds-rasniya"
            class="glass-card p-5 sm:p-6 md:p-8 rounded-3xl border border-gold-400/40 text-center hover:border-gold-300 transition-all hover:scale-[1.02] shadow-xl group flex flex-col justify-between relative overflow-visible h-full"
          >
            <div class="absolute top-0 right-0 w-14 h-14 bg-gold-400/10 rounded-bl-full pointer-events-none"></div>

            <div class="space-y-3 flex flex-col items-center">
              <!-- Monogram Circle Avatar -->
              <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gold-gradient p-[1px] shadow-lg group-hover:scale-105 transition-transform flex-shrink-0">
                <div class="w-full h-full bg-emerald-950 rounded-full flex items-center justify-center border border-gold-300/30">
                  <span class="font-cinzel text-sm sm:text-base font-bold text-gold-300 tracking-wider">A &amp; R</span>
                </div>
              </div>

              <!-- Line-by-line Stacked Names: Boy (Top), &, Girl (Below) -->
              <div class="w-full flex flex-col justify-center items-center min-h-[160px]">
                <span class="text-[10px] font-cinzel text-gold-400 font-bold uppercase tracking-widest mb-1">Invitation 1</span>
                
                <div class="flex flex-col items-center justify-center my-auto py-1 w-full">
                  <span class="font-script text-3xl sm:text-4xl md:text-4xl text-gold-gradient font-bold leading-tight px-2">
                    Afsad
                  </span>
                  <span class="font-script text-lg sm:text-xl text-gold-300 font-bold my-0.5">
                    &amp;
                  </span>
                  <span class="font-script text-3xl sm:text-4xl md:text-4xl text-gold-gradient font-bold leading-tight px-2">
                    Rasniya
                  </span>
                </div>

                <p class="text-[11px] sm:text-xs text-cream-200/80 font-sans mt-auto pt-2">
                  Sunday, 30th August 2026 • 4:00 PM
                </p>
              </div>
            </div>

            <!-- Equal Action Button -->
            <div class="mt-5 pt-4 border-t border-gold-400/20 w-full">
              <span class="inline-flex items-center gap-2 px-6 py-3 rounded-full btn-gold text-xs font-bold uppercase tracking-wider shadow-md w-full justify-center">
                Open Invitation
                <ArrowRight class="w-4 h-4" />
              </span>
            </div>
          </NuxtLink>

          <!-- Choice 2: Shamnad & Fabna Sherin -->
          <NuxtLink
            to="/shamnad-weds-fabnasherin"
            class="glass-card p-5 sm:p-6 md:p-8 rounded-3xl border border-gold-400/40 text-center hover:border-gold-300 transition-all hover:scale-[1.02] shadow-xl group flex flex-col justify-between relative overflow-visible h-full"
          >
            <div class="absolute top-0 right-0 w-14 h-14 bg-gold-400/10 rounded-bl-full pointer-events-none"></div>

            <div class="space-y-3 flex flex-col items-center">
              <!-- Monogram Circle Avatar -->
              <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gold-gradient p-[1px] shadow-lg group-hover:scale-105 transition-transform flex-shrink-0">
                <div class="w-full h-full bg-emerald-950 rounded-full flex items-center justify-center border border-gold-300/30">
                  <span class="font-cinzel text-sm sm:text-base font-bold text-gold-300 tracking-wider">S &amp; F</span>
                </div>
              </div>

              <!-- Line-by-line Stacked Names: Boy (Top), &, Girl (Below) -->
              <div class="w-full flex flex-col justify-center items-center min-h-[160px]">
                <span class="text-[10px] font-cinzel text-gold-400 font-bold uppercase tracking-widest mb-1">Invitation 2</span>
                
                <div class="flex flex-col items-center justify-center my-auto py-1 w-full">
                  <span class="font-script text-3xl sm:text-4xl md:text-4xl text-gold-gradient font-bold leading-tight px-2">
                    Shamnad
                  </span>
                  <span class="font-script text-lg sm:text-xl text-gold-300 font-bold my-0.5">
                    &amp;
                  </span>
                  <span class="font-script text-3xl sm:text-4xl md:text-4xl text-gold-gradient font-bold leading-tight px-2">
                    Fabna Sherin
                  </span>
                </div>

                <p class="text-[11px] sm:text-xs text-cream-200/80 font-sans mt-auto pt-2">
                  Sunday, 30th August 2026 • 4:00 PM
                </p>
              </div>
            </div>

            <!-- Equal Action Button -->
            <div class="mt-5 pt-4 border-t border-gold-400/20 w-full">
              <span class="inline-flex items-center gap-2 px-6 py-3 rounded-full btn-gold text-xs font-bold uppercase tracking-wider shadow-md w-full justify-center">
                Open Invitation
                <ArrowRight class="w-4 h-4" />
              </span>
            </div>
          </NuxtLink>
        </div>

        <!-- Venue Navigation Footer Bar -->
        <div class="pt-5 border-t border-gold-400/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream-200">
          <div class="flex items-center gap-2 text-left">
            <MapPin class="w-4 h-4 text-gold-400 flex-shrink-0" />
            <span class="font-sans text-[11px] sm:text-xs">
              Atlantis Convention Centre, Balanpeedika, Kannattipadi, Kacheripadi Road, Po, Vengara, Kerala 676304
            </span>
          </div>

          <a
            href="https://maps.app.goo.gl/CgChbFE3zeVWFGeSA?g_st=awb"
            target="_blank"
            rel="noopener noreferrer"
            class="px-5 py-2.5 rounded-full btn-gold text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md hover:scale-105 transition-all flex-shrink-0"
          >
            <Navigation class="w-3.5 h-3.5" />
            Open Location in Google Maps
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowRight, MapPin, Navigation } from 'lucide-vue-next'
</script>
