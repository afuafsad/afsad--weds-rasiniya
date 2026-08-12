<template>
  <section id="verse" class="py-12 md:py-20 px-4 relative z-20">
    <div class="max-w-4xl mx-auto">
      <div class="arch-frame glass-card-gold p-8 md:p-14 relative text-center border border-gold-400/40 shadow-2xl overflow-hidden">
        <!-- Floating Ambient Background Islamic Pattern Accent -->
        <div class="absolute inset-0 bg-emerald-radial opacity-40 pointer-events-none"></div>

        <!-- Decorative Floral Crest Header -->
        <div class="relative z-10 flex justify-center mb-6">
          <div class="w-14 h-14 rounded-full bg-emerald-950 border border-gold-400/60 flex items-center justify-center text-gold-300 shadow-xl">
            <Heart class="w-7 h-7 text-gold-400 fill-gold-400/20 animate-pulse" />
          </div>
        </div>

        <span class="relative z-10 inline-block font-cinzel text-xs md:text-sm font-bold tracking-[0.3em] text-gold-300 uppercase mb-4">
          Surah Ar-Rum (30:21)
        </span>

        <!-- Arabic Verse Text -->
        <div class="relative z-10 my-6">
          <p class="font-amiri text-2xl sm:text-3xl md:text-4xl text-gold-200 leading-[2.2] md:leading-[2.4] text-gold-glow max-w-3xl mx-auto dir-rtl">
            « وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً »
          </p>
        </div>

        <!-- English Translation -->
        <div class="relative z-10 max-w-2xl mx-auto mt-6 pt-6 border-t border-gold-400/30">
          <p class="font-sans text-sm md:text-base text-cream-100 italic leading-relaxed">
            "And among His Signs is this, that He created for you mates from among yourselves, that ye may dwell in tranquility with them, and He has put love and mercy between your (hearts)..."
          </p>
        </div>

        <!-- Traditional Blessing Dua Card -->
        <div class="relative z-10 mt-8 p-4 rounded-xl bg-emerald-950/70 border border-gold-400/30 inline-block max-w-xl">
          <p class="font-amiri text-lg text-gold-300 mb-1">
            بَارَكَ اللهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
          </p>
          <p class="font-sans text-xs text-cream-200/90">
            "May Allah bless you, send His blessings upon you, and unite you both in goodness."
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Heart } from 'lucide-vue-next'
</script>
