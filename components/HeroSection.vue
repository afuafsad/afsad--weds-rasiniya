<template>
  <section id="hero" class="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden bg-islamic-pattern">
    <!-- Interactive Canvas Floating Petals/Particles -->
    <canvas ref="canvasRef" class="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-70"></canvas>

    <!-- Decorative Golden Glowing Orbs background -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 md:w-[450px] h-72 md:h-[450px] bg-gold-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow"></div>
    <div class="absolute bottom-10 right-10 w-64 h-64 bg-emerald-700/20 rounded-full blur-2xl pointer-events-none"></div>

    <!-- Main Content Container with Arch Frame styling -->
    <div class="relative z-20 max-w-4xl w-full text-center mx-auto">
      <!-- Islamic Arch Dome Card Wrapper -->
      <div class="arch-frame glass-card-gold p-6 md:p-12 relative border border-gold-400/40 shadow-2xl overflow-visible">
        <!-- Golden Corner Filigree Accents -->
        <div class="absolute top-3 left-3 text-gold-400/40 text-xl font-amiri select-none">✦</div>
        <div class="absolute top-3 right-3 text-gold-400/40 text-xl font-amiri select-none">✦</div>
        <div class="absolute bottom-3 left-3 text-gold-400/40 text-xl font-amiri select-none">✦</div>
        <div class="absolute bottom-3 right-3 text-gold-400/40 text-xl font-amiri select-none">✦</div>

        <!-- Bismillah Header -->
        <div class="mb-6 space-y-2">
          <p class="font-amiri text-2xl md:text-4xl text-gold-300 leading-relaxed text-gold-glow tracking-widest">
            بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </p>
          <p class="text-xs md:text-sm font-sans tracking-widest text-gold-200/80 uppercase">
            In the Name of Allah, the Most Gracious, the Most Merciful
          </p>
        </div>

        <!-- Divider Line with Crescent Star -->
        <div class="flex items-center justify-center gap-3 my-4">
          <div class="h-[1px] w-12 md:w-20 bg-gradient-to-r from-transparent to-gold-400/80"></div>
          <div class="text-gold-300 text-lg">☽ <span>★</span></div>
          <div class="h-[1px] w-12 md:w-20 bg-gradient-to-l from-transparent to-gold-400/80"></div>
        </div>

        <!-- Invitation Intro Text -->
        <p class="text-xs md:text-sm font-medium tracking-[0.25em] text-cream-200 uppercase mb-2">
          Together with their families
        </p>
        <div class="inline-block px-4 py-1 rounded-full bg-emerald-950/80 border border-gold-400/30 text-gold-300 text-xs font-cinzel font-bold uppercase tracking-widest mb-4">
          Joint Wedding Celebration
        </div>
        <p class="text-sm md:text-base font-cinzel text-gold-200 tracking-wider mb-6">
          Cordially invite you to celebrate the marriage of
        </p>

        <!-- Both Couples Names Grid -->
        <div class="py-4 my-2 relative max-w-2xl mx-auto space-y-6">
          <!-- Couple 1: Afsad & Rasniya -->
          <div class="py-6 px-6 md:py-8 md:px-8 rounded-2xl glass-card border border-gold-400/30 shadow-lg overflow-visible">
            <h1 class="font-script text-4xl sm:text-5xl md:text-6xl text-gold-gradient font-bold drop-shadow-md leading-relaxed py-2">
              Afsad <span class="text-gold-300">&amp;</span> Rasniya
            </h1>
          </div>

          <!-- Brotherhood Symbol Divider -->
          <div class="flex items-center justify-center gap-3">
            <div class="h-[1px] w-16 bg-gradient-to-r from-transparent to-gold-400"></div>
            <div class="px-3 py-1 rounded-full bg-emerald-950 border border-gold-400/60 text-gold-300 font-cinzel text-xs font-bold uppercase">
              ✦ &amp; ✦
            </div>
            <div class="h-[1px] w-16 bg-gradient-to-l from-transparent to-gold-400"></div>
          </div>

          <!-- Couple 2: Shamnad & Fabna Sherin -->
          <div class="py-6 px-6 md:py-8 md:px-8 rounded-2xl glass-card border border-gold-400/30 shadow-lg overflow-visible">
            <h1 class="font-script text-4xl sm:text-5xl md:text-6xl text-gold-gradient font-bold drop-shadow-md leading-relaxed py-2">
              Shamnad <span class="text-gold-300">&amp;</span> Fabna Sherin
            </h1>
          </div>
        </div>

        <!-- Date & Time Highlight Pill -->
        <div class="mt-6 inline-block">
          <div class="px-6 py-3 rounded-full bg-emerald-900/90 border border-gold-400/50 shadow-xl flex items-center justify-center gap-2 md:gap-3 text-gold-200">
            <Calendar class="w-4 h-4 md:w-5 md:h-5 text-gold-400" />
            <span class="font-cinzel text-sm md:text-lg font-bold tracking-wider">
              Sunday, 30th August 2026
            </span>
            <span class="text-gold-400">•</span>
            <Clock class="w-4 h-4 md:w-5 md:h-5 text-gold-400" />
            <span class="font-cinzel text-sm md:text-base font-semibold">
              4:00 PM
            </span>
          </div>
        </div>

        <!-- Venue Summary Pill -->
        <div class="mt-3 block text-xs md:text-sm font-sans text-gold-300 font-medium">
          📍 Atlantis Convention Centre, Vengara
        </div>

        <!-- Subtext -->
        <p class="mt-4 text-xs md:text-sm font-sans text-cream-300/90 max-w-lg mx-auto leading-relaxed">
          "May Allah bless both unions with endless joy, harmony, and eternal love."
        </p>

        <!-- Action Call Buttons -->
        <div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#rsvp"
            class="w-full sm:w-auto px-8 py-3.5 rounded-full btn-gold shadow-lg font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2"
          >
            <CheckCircle2 class="w-4 h-4" />
            Confirm RSVP
          </a>
          <a
            href="#events"
            class="w-full sm:w-auto px-6 py-3.5 rounded-full glass-card-gold text-gold-200 hover:text-gold-100 font-medium text-sm tracking-wider uppercase flex items-center justify-center gap-2 border border-gold-400/40 hover:border-gold-400 transition-all"
          >
            <MapPin class="w-4 h-4" />
            View Schedule &amp; Map
          </a>
        </div>
      </div>

      <!-- Animated Scroll Down Indicator -->
      <a href="#countdown" class="inline-flex flex-col items-center gap-1.5 mt-8 text-gold-400/80 hover:text-gold-300 transition-colors">
        <span class="text-[11px] font-sans tracking-widest uppercase">Scroll Down</span>
        <ChevronDown class="w-5 h-5 animate-bounce" />
      </a>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Calendar, Clock, CheckCircle2, MapPin, ChevronDown } from 'lucide-vue-next'

const canvasRef = ref(null)
let animId = null

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')

  let width = canvas.width = window.innerWidth
  let height = canvas.height = window.innerHeight

  const handleResize = () => {
    width = canvas.width = window.innerWidth
    height = canvas.height = window.innerHeight
  }
  window.addEventListener('resize', handleResize)

  // Floating flower petals and gold sparkles
  const petals = []
  const petalCount = window.innerWidth < 768 ? 25 : 45

  for (let i = 0; i < petalCount; i++) {
    petals.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 6 + 3,
      speedY: Math.random() * 0.8 + 0.3,
      speedX: Math.sin(Math.random() * Math.PI) * 0.5,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 1.5,
      color: Math.random() > 0.4 ? 'rgba(251, 191, 36, ' + (Math.random() * 0.6 + 0.2) + ')' : 'rgba(244, 230, 186, ' + (Math.random() * 0.5 + 0.2) + ')',
      type: Math.random() > 0.5 ? 'petal' : 'star'
    })
  }

  const render = () => {
    ctx.clearRect(0, 0, width, height)

    petals.forEach(p => {
      p.y += p.speedY
      p.x += p.speedX
      p.rotation += p.rotationSpeed

      if (p.y > height) {
        p.y = -10
        p.x = Math.random() * width
      }
      if (p.x > width) p.x = 0
      if (p.x < 0) p.x = width

      ctx.save()
      ctx.translate(p.x, p.y)
      ctx.rotate((p.rotation * Math.PI) / 180)

      if (p.type === 'petal') {
        ctx.beginPath()
        ctx.fillStyle = p.color
        ctx.ellipse(0, 0, p.size, p.size / 2, 0, 0, 2 * Math.PI)
        ctx.fill()
      } else {
        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.restore()
    })

    animId = requestAnimationFrame(render)
  }

  render()

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
    if (animId) cancelAnimationFrame(animId)
  })
})
</script>
