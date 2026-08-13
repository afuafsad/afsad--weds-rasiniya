<template>
  <section id="couples" class="py-16 md:py-24 px-4 relative z-20">
    <div class="max-w-6xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card-gold text-xs uppercase tracking-widest text-gold-300 font-bold mb-3 border border-gold-400/30">
          <Users class="w-3.5 h-3.5 text-gold-400" />
          The Two Brothers &amp; Their Brides
        </div>
        <h2 class="font-cinzel text-3xl md:text-5xl font-bold text-gold-gradient tracking-wide mb-3">
          Meet The Couples
        </h2>
        <p class="font-sans text-sm md:text-base text-cream-200/90 max-w-md mx-auto">
          Two brothers, united by faith and family, celebrating their blessed marriages on the same day.
        </p>
      </div>

      <!-- Couple Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
        <!-- Couple 1: Afsad & Rasniya -->
        <div class="glass-card-gold p-8 rounded-3xl border border-gold-400/40 relative flex flex-col justify-between shadow-2xl group hover:border-gold-300 transition-all overflow-hidden">
          <div class="absolute -top-10 -right-10 w-40 h-40 bg-gold-400/10 rounded-full blur-2xl pointer-events-none"></div>

          <div>
            <!-- Monogram Avatar -->
            <div class="flex justify-center mb-6">
              <div class="w-24 h-24 rounded-full p-[2px] bg-gold-gradient shadow-2xl group-hover:scale-105 transition-transform">
                <div class="w-full h-full bg-emerald-950 rounded-full flex flex-col items-center justify-center border border-gold-300/30">
                  <span class="font-script text-3xl text-gold-300">A &amp; R</span>
                  <span class="text-[9px] font-cinzel text-gold-400/80 uppercase tracking-widest">Couple 1</span>
                </div>
              </div>
            </div>

            <!-- Couple 1 Details -->
            <div class="text-center space-y-3">
              <h3 class="font-script text-4xl sm:text-5xl text-gold-gradient font-bold">
                Afsad &amp; Rasniya
              </h3>
              <p class="font-cinzel text-xs uppercase tracking-widest text-gold-300/90 font-semibold">
                Groom &amp; Bride
              </p>
              <div class="w-12 h-[1px] bg-gold-400/50 mx-auto my-3"></div>
              <p class="font-sans text-sm text-cream-200 leading-relaxed px-4">
                Guided by devotion, integrity, and joy. Looking forward to embarking on this blessed journey together under Allah's divine grace.
              </p>
            </div>
          </div>

          <div class="mt-8 pt-4 border-t border-gold-400/20 text-center">
            <span class="inline-flex items-center gap-1.5 text-xs text-gold-300 font-medium">
              <Sparkles class="w-3.5 h-3.5 text-gold-400" />
              "May Allah bless our union with happiness."
            </span>
          </div>
        </div>

        <!-- Couple 2: Shamnad & Fabna Sherin -->
        <div class="glass-card-gold p-8 rounded-3xl border border-gold-400/40 relative flex flex-col justify-between shadow-2xl group hover:border-gold-300 transition-all overflow-hidden">
          <div class="absolute -top-10 -right-10 w-40 h-40 bg-gold-400/10 rounded-full blur-2xl pointer-events-none"></div>

          <div>
            <!-- Monogram Avatar -->
            <div class="flex justify-center mb-6">
              <div class="w-24 h-24 rounded-full p-[2px] bg-gold-gradient shadow-2xl group-hover:scale-105 transition-transform">
                <div class="w-full h-full bg-emerald-950 rounded-full flex flex-col items-center justify-center border border-gold-300/30">
                  <span class="font-script text-3xl text-gold-300">S &amp; F</span>
                  <span class="text-[9px] font-cinzel text-gold-400/80 uppercase tracking-widest">Couple 2</span>
                </div>
              </div>
            </div>

            <!-- Couple 2 Details -->
            <div class="text-center space-y-3">
              <h3 class="font-script text-4xl sm:text-5xl text-gold-gradient font-bold">
                Shamnad &amp; Fabna Sherin
              </h3>
              <p class="font-cinzel text-xs uppercase tracking-widest text-gold-300/90 font-semibold">
                Groom &amp; Bride
              </p>
              <div class="w-12 h-[1px] bg-gold-400/50 mx-auto my-3"></div>
              <p class="font-sans text-sm text-cream-200 leading-relaxed px-4">
                Graced with faith, love, and togetherness. Excited to celebrate our new beginning alongside family and loved ones.
              </p>
            </div>
          </div>

          <div class="mt-8 pt-4 border-t border-gold-400/20 text-center">
            <span class="inline-flex items-center gap-1.5 text-xs text-gold-300 font-medium">
              <Sparkles class="w-3.5 h-3.5 text-gold-400" />
              "Completed half our deen with gratitude."
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Users, Sparkles } from 'lucide-vue-next'
</script>
