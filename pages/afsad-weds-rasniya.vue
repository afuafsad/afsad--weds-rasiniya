<template>
  <div class="min-h-screen bg-emerald-950 text-cream-100 selection:bg-gold-500 selection:text-emerald-950">
    <!-- Navbar -->
    <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-3 bg-emerald-950/90 backdrop-blur-md border-b border-gold-500/30 shadow-lg">
      <div class="max-w-6xl mx-auto flex items-center justify-between">
        <NuxtLink to="/" class="flex items-center gap-2 group">
          <div class="w-9 h-9 rounded-full bg-gold-gradient p-[1px] shadow-md group-hover:scale-105 transition-transform">
            <div class="w-full h-full bg-emerald-950 rounded-full flex items-center justify-center">
              <span class="font-cinzel text-xs font-bold text-gold-300">A&amp;R</span>
            </div>
          </div>
          <span class="font-script text-xl md:text-2xl text-gold-300 tracking-wide font-bold">
            Afsad &amp; Rasniya
          </span>
        </NuxtLink>

        <nav class="hidden md:flex items-center gap-6 text-sm font-medium text-cream-200">
          <a href="#hero" class="hover:text-gold-400 transition-colors">Home</a>
          <a href="#countdown" class="hover:text-gold-400 transition-colors">Countdown</a>
          <a href="#couple" class="hover:text-gold-400 transition-colors">The Couple</a>
          <a href="#events" class="hover:text-gold-400 transition-colors">Event Details</a>
          <a href="#rsvp" class="hover:text-gold-400 transition-colors">RSVP</a>
        </nav>

        <div class="flex items-center gap-3">
          <button @click="shareInvitation" class="p-2 rounded-full glass-card-gold text-gold-300 hover:text-gold-200 transition-all active:scale-95" title="Share Invitation">
            <Share2 class="w-4 h-4" />
          </button>
          <NuxtLink to="/shamnad-weds-fabnasherin" class="hidden sm:inline-flex px-3 py-1.5 rounded-full text-xs font-semibold glass-card-gold text-gold-300 hover:text-gold-200">
            Shamnad &amp; Fabna's Invitation →
          </NuxtLink>
        </div>
      </div>
    </header>

    <main>
      <!-- Hero Section -->
      <section id="hero" class="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 overflow-hidden bg-islamic-pattern">
        <canvas ref="canvasRef" class="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-70"></canvas>

        <div class="relative z-20 max-w-3xl w-full text-center mx-auto">
          <div class="arch-frame glass-card-gold p-6 md:p-12 relative border border-gold-400/40 shadow-2xl overflow-visible">
            <div class="mb-6 space-y-2">
              <p class="font-amiri text-3xl md:text-5xl text-gold-300 leading-relaxed text-gold-glow">
                بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
              </p>
              <p class="text-xs md:text-sm font-sans tracking-widest text-gold-200/80 uppercase">
                In the Name of Allah, the Most Gracious, the Most Merciful
              </p>
            </div>

            <div class="flex items-center justify-center gap-3 my-4">
              <div class="h-[1px] w-16 bg-gradient-to-r from-transparent to-gold-400/80"></div>
              <div class="text-gold-300 text-lg">☽ <span>★</span></div>
              <div class="h-[1px] w-16 bg-gradient-to-l from-transparent to-gold-400/80"></div>
            </div>

            <p class="text-xs md:text-sm font-medium tracking-[0.25em] text-cream-200 uppercase mb-2">
              Together with their families
            </p>
            <p class="text-sm md:text-base font-cinzel text-gold-200 tracking-wider mb-6">
              Cordially request the honor of your presence at the wedding reception of
            </p>

            <!-- Line-by-Line Stacked Names: Boy Top, &, Girl Below -->
            <div class="py-6 px-4 rounded-3xl glass-card border border-gold-400/30 shadow-xl my-4 flex flex-col items-center justify-center">
              <h1 class="font-script text-5xl sm:text-6xl md:text-7xl text-gold-gradient font-bold drop-shadow-lg leading-tight py-1">
                Afsad
              </h1>
              <div class="w-12 h-12 rounded-full border border-gold-400/50 bg-emerald-950/90 flex items-center justify-center shadow-md my-2">
                <span class="font-script text-2xl text-gold-300 font-bold">&amp;</span>
              </div>
              <h1 class="font-script text-5xl sm:text-6xl md:text-7xl text-gold-gradient font-bold drop-shadow-lg leading-tight py-1">
                Rasniya
              </h1>
            </div>

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

            <p class="mt-4 text-xs md:text-sm font-sans text-gold-300 font-medium">
              📍 Atlantis Convention Centre, Vengara
            </p>

            <div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#rsvp" class="w-full sm:w-auto px-8 py-3.5 rounded-full btn-gold font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg">
                <CheckCircle2 class="w-4 h-4" /> Confirm RSVP
              </a>
              <a href="#events" class="w-full sm:w-auto px-6 py-3.5 rounded-full glass-card-gold text-gold-200 hover:text-gold-100 font-medium text-sm tracking-wider uppercase flex items-center justify-center gap-2 border border-gold-400/40">
                <MapPin class="w-4 h-4" /> View Location &amp; Venue
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Countdown Section -->
      <CountdownTimer />

      <!-- Quranic Verse -->
      <QuranicVerse />

      <!-- Couple Details -->
      <section id="couple" class="py-16 md:py-24 px-4 relative z-20">
        <div class="max-w-4xl mx-auto text-center">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card-gold text-xs uppercase tracking-widest text-gold-300 font-bold mb-3 border border-gold-400/30">
            <Users class="w-3.5 h-3.5 text-gold-400" />
            The Couple
          </div>
          <h2 class="font-cinzel text-3xl md:text-5xl font-bold text-gold-gradient tracking-wide mb-10">
            Afsad &amp; Rasniya
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Groom Afsad -->
            <div class="glass-card-gold p-8 rounded-3xl border border-gold-400/40 text-center shadow-xl">
              <div class="w-20 h-20 rounded-full bg-gold-gradient p-[1px] mx-auto mb-4 shadow-lg">
                <div class="w-full h-full bg-emerald-950 rounded-full flex items-center justify-center">
                  <span class="font-cinzel text-lg font-bold text-gold-300">A</span>
                </div>
              </div>
              <h3 class="font-script text-4xl text-gold-gradient font-bold mb-1">Afsad</h3>
              <p class="font-cinzel text-xs text-gold-300 font-semibold uppercase tracking-wider mb-3">Groom</p>
              <p class="text-sm text-cream-200 leading-relaxed">
                Guided by devotion, integrity, and joy. Looking forward to honoring and cherishing Rasniya as his partner in this dunya and akhirah.
              </p>
            </div>

            <!-- Bride Rasniya -->
            <div class="glass-card-gold p-8 rounded-3xl border border-gold-400/40 text-center shadow-xl">
              <div class="w-20 h-20 rounded-full bg-gold-gradient p-[1px] mx-auto mb-4 shadow-lg">
                <div class="w-full h-full bg-emerald-950 rounded-full flex items-center justify-center">
                  <span class="font-cinzel text-lg font-bold text-gold-300">R</span>
                </div>
              </div>
              <h3 class="font-script text-4xl text-gold-gradient font-bold mb-1">Rasniya</h3>
              <p class="font-cinzel text-xs text-gold-300 font-semibold uppercase tracking-wider mb-3">Bride</p>
              <p class="text-sm text-cream-200 leading-relaxed">
                Graced with modesty, warmth, and faith. Excited to embark on this beautiful journey of life with Afsad, trusting in Allah's wisdom and blessings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Event Schedule & Venue -->
      <EventSchedule />

      <!-- RSVP Section -->
      <RsvpForm />
    </main>

    <!-- Footer -->
    <FooterSection />

    <!-- Floating Actions -->
    <FloatingActions />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Calendar, Clock, CheckCircle2, MapPin, Share2, Users } from 'lucide-vue-next'
import CountdownTimer from '~/components/CountdownTimer.vue'
import QuranicVerse from '~/components/QuranicVerse.vue'
import EventSchedule from '~/components/EventSchedule.vue'
import RsvpForm from '~/components/RsvpForm.vue'
import FooterSection from '~/components/FooterSection.vue'
import FloatingActions from '~/components/FloatingActions.vue'

const canvasRef = ref(null)
let animId = null

const shareInvitation = async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: 'Wedding Invitation | Afsad & Rasniya',
        text: 'Join us in celebrating the wedding of Afsad & Rasniya on August 30, 2026!',
        url: window.location.href
      })
    } catch (e) {}
  } else {
    navigator.clipboard.writeText(window.location.href)
    alert('Invitation link copied to clipboard!')
  }
}

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

  const petals = []
  for (let i = 0; i < 35; i++) {
    petals.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 6 + 3,
      speedY: Math.random() * 0.8 + 0.3,
      speedX: Math.sin(Math.random() * Math.PI) * 0.5,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 1.5,
      color: 'rgba(251, 191, 36, ' + (Math.random() * 0.6 + 0.2) + ')'
    })
  }

  const render = () => {
    ctx.clearRect(0, 0, width, height)
    petals.forEach(p => {
      p.y += p.speedY
      p.x += p.speedX
      if (p.y > height) p.y = -10
      ctx.save()
      ctx.translate(p.x, p.y)
      ctx.rotate((p.rotation * Math.PI) / 180)
      ctx.beginPath()
      ctx.fillStyle = p.color
      ctx.ellipse(0, 0, p.size, p.size / 2, 0, 0, 2 * Math.PI)
      ctx.fill()
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
