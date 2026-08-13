<template>
  <footer class="relative z-20 py-12 px-4 border-t border-gold-400/20 bg-emerald-950 text-center">
    <div class="max-w-4xl mx-auto space-y-6">
      <!-- Dual Monogram Logo -->
      <div class="w-12 h-12 rounded-full bg-gold-gradient p-[1px] mx-auto shadow-xl">
        <div class="w-full h-full bg-emerald-950 rounded-full flex items-center justify-center">
          <span class="font-cinzel text-xs font-bold text-gold-300">A&amp;S</span>
        </div>
      </div>

      <!-- Couple Names -->
      <h3 class="font-script text-2xl md:text-3xl text-gold-gradient font-bold px-2">
        Afsad &amp; Rasniya &nbsp;•&nbsp; Shamnad &amp; Fabna Sherin
      </h3>

      <!-- Bismillah Closing -->
      <p class="font-amiri text-xl text-gold-300">
        جَزَاكُمُ ٱللَّٰهُ خَيْرًا
      </p>

      <!-- Venue Address Summary & Direct Map Button -->
      <div class="py-4 px-6 rounded-2xl glass-card-gold border border-gold-400/30 max-w-xl mx-auto space-y-3">
        <div class="flex items-center justify-center gap-2 text-gold-300 font-cinzel text-xs md:text-sm font-bold uppercase tracking-wider">
          <MapPin class="w-4 h-4 text-gold-400" />
          Atlantis Convention Centre
        </div>
        <p class="font-sans text-xs text-cream-200 leading-relaxed">
          Balanpeedika, Kannattipadi, Kacheripadi Road, Po, Vengara, Kerala 676304
        </p>

        <a
          href="https://maps.app.goo.gl/CgChbFE3zeVWFGeSA?g_st=awb"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full btn-gold text-xs font-bold uppercase tracking-wider shadow-md hover:scale-105 transition-all mt-2"
        >
          <Navigation class="w-3.5 h-3.5" />
          Open Location in Google Maps
        </a>
      </div>

      <p class="font-sans text-xs md:text-sm text-cream-200/80 max-w-md mx-auto">
        Thank you for being a part of our lives and sharing in our joint celebration. We look forward to welcoming you on Sunday, 30th August 2026.
      </p>

      <div class="pt-4 border-t border-gold-400/10 flex flex-col sm:flex-row items-center justify-between text-xs text-cream-300/60 gap-2">
        <span>© 2026 Joint Wedding Celebration. All Rights Reserved.</span>
        <a href="#hero" class="hover:text-gold-300 transition-colors flex items-center gap-1">
          Back to Top ↑
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { MapPin, Navigation } from 'lucide-vue-next'
</script>
