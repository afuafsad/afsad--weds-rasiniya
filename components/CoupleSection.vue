<template>
  <section id="couple" class="py-16 md:py-24 px-4 relative z-20">
    <div class="max-w-5xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card-gold text-xs uppercase tracking-widest text-gold-300 font-bold mb-3 border border-gold-400/30">
          <Users class="w-3.5 h-3.5 text-gold-400" />
          The Blessed Union
        </div>
        <h2 class="font-cinzel text-3xl md:text-5xl font-bold text-gold-gradient tracking-wide mb-3">
          Meet The Groom &amp; Bride
        </h2>
        <p class="font-sans text-sm md:text-base text-cream-200/90 max-w-md mx-auto">
          Two souls, guided by faith and love, coming together under Allah's divine grace.
        </p>
      </div>

      <!-- Couple Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
        <!-- Bride Card (Rasniya) -->
        <div class="glass-card-gold p-8 rounded-3xl border border-gold-400/40 relative flex flex-col justify-between shadow-2xl group hover:border-gold-300 transition-all overflow-hidden">
          <!-- Background Ornamental Pattern -->
          <div class="absolute -top-10 -right-10 w-40 h-40 bg-gold-400/10 rounded-full blur-2xl pointer-events-none"></div>

          <div>
            <!-- Decorative Monogram Avatar -->
            <div class="flex justify-center mb-6">
              <div class="w-24 h-24 rounded-full p-[2px] bg-gold-gradient shadow-2xl group-hover:scale-105 transition-transform">
                <div class="w-full h-full bg-emerald-950 rounded-full flex flex-col items-center justify-center border border-gold-300/30">
                  <span class="font-script text-4xl text-gold-300">R</span>
                  <span class="text-[10px] font-cinzel text-gold-400/80 uppercase tracking-widest">Bride</span>
                </div>
              </div>
            </div>

            <!-- Bride Details -->
            <div class="text-center space-y-3">
              <h3 class="font-script text-4xl sm:text-5xl text-gold-gradient font-bold">
                Rasniya
              </h3>
              <p class="font-cinzel text-xs uppercase tracking-widest text-gold-300/90 font-semibold">
                Daughter of Beloved Parents
              </p>
              <div class="w-12 h-[1px] bg-gold-400/50 mx-auto my-3"></div>
              <p class="font-sans text-sm text-cream-200 leading-relaxed px-4">
                Graced with modesty, warmth, and faith. Excited to embark on this beautiful journey of life with Afsad, trusting in Allah's wisdom and blessings.
              </p>
            </div>
          </div>

          <div class="mt-8 pt-4 border-t border-gold-400/20 text-center">
            <span class="inline-flex items-center gap-1.5 text-xs text-gold-300 font-medium">
              <Sparkles class="w-3.5 h-3.5 text-gold-400" />
              "My heart rests in Allah's beautiful decree."
            </span>
          </div>
        </div>

        <!-- Groom Card (Afsad) -->
        <div class="glass-card-gold p-8 rounded-3xl border border-gold-400/40 relative flex flex-col justify-between shadow-2xl group hover:border-gold-300 transition-all overflow-hidden">
          <!-- Background Ornamental Pattern -->
          <div class="absolute -top-10 -right-10 w-40 h-40 bg-gold-400/10 rounded-full blur-2xl pointer-events-none"></div>

          <div>
            <!-- Decorative Monogram Avatar -->
            <div class="flex justify-center mb-6">
              <div class="w-24 h-24 rounded-full p-[2px] bg-gold-gradient shadow-2xl group-hover:scale-105 transition-transform">
                <div class="w-full h-full bg-emerald-950 rounded-full flex flex-col items-center justify-center border border-gold-300/30">
                  <span class="font-script text-4xl text-gold-300">A</span>
                  <span class="text-[10px] font-cinzel text-gold-400/80 uppercase tracking-widest">Groom</span>
                </div>
              </div>
            </div>

            <!-- Groom Details -->
            <div class="text-center space-y-3">
              <h3 class="font-script text-4xl sm:text-5xl text-gold-gradient font-bold">
                Afsad
              </h3>
              <p class="font-cinzel text-xs uppercase tracking-widest text-gold-300/90 font-semibold">
                Son of Beloved Parents
              </p>
              <div class="w-12 h-[1px] bg-gold-400/50 mx-auto my-3"></div>
              <p class="font-sans text-sm text-cream-200 leading-relaxed px-4">
                Guided by devotion, integrity, and joy. Looking forward to honoring and cherishing Rasniya as his partner in this dunya and akhirah.
              </p>
            </div>
          </div>

          <div class="mt-8 pt-4 border-t border-gold-400/20 text-center">
            <span class="inline-flex items-center gap-1.5 text-xs text-gold-300 font-medium">
              <Sparkles class="w-3.5 h-3.5 text-gold-400" />
              "Completed half my deen with gratitude."
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
