<template>
  <section id="countdown" class="py-16 md:py-24 px-4 relative z-20">
    <div class="max-w-4xl mx-auto text-center">
      <!-- Section Title -->
      <div class="mb-10">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card-gold text-xs uppercase tracking-widest text-gold-300 font-bold mb-3 border border-gold-400/30">
          <Clock class="w-3.5 h-3.5 text-gold-400" />
          The Blessed Countdown
        </div>
        <h2 class="font-cinzel text-3xl md:text-5xl font-bold text-gold-gradient tracking-wide mb-3">
          Counting Down To Our Wedding Celebration
        </h2>
        <p class="font-sans text-sm md:text-base text-cream-200/90 max-w-lg mx-auto">
          "In the presence of family and loved ones, our celebration begins on August 30, 2026."
        </p>
      </div>

      <!-- Countdown Grid Cards -->
      <div v-if="!isExpired" class="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
        <!-- Days Card -->
        <div class="glass-card-gold p-4 md:p-6 rounded-2xl border border-gold-400/40 text-center relative overflow-hidden group hover:border-gold-300 transition-all shadow-xl">
          <div class="absolute top-0 right-0 w-12 h-12 bg-gold-400/10 rounded-bl-full pointer-events-none"></div>
          <span class="block font-cinzel text-4xl sm:text-5xl md:text-6xl font-extrabold text-gold-300 text-gold-glow mb-1 transition-transform group-hover:scale-105">
            {{ formatNumber(timeLeft.days) }}
          </span>
          <span class="block font-sans text-xs md:text-sm font-semibold tracking-widest uppercase text-cream-300">
            Days
          </span>
        </div>

        <!-- Hours Card -->
        <div class="glass-card-gold p-4 md:p-6 rounded-2xl border border-gold-400/40 text-center relative overflow-hidden group hover:border-gold-300 transition-all shadow-xl">
          <div class="absolute top-0 right-0 w-12 h-12 bg-gold-400/10 rounded-bl-full pointer-events-none"></div>
          <span class="block font-cinzel text-4xl sm:text-5xl md:text-6xl font-extrabold text-gold-300 text-gold-glow mb-1 transition-transform group-hover:scale-105">
            {{ formatNumber(timeLeft.hours) }}
          </span>
          <span class="block font-sans text-xs md:text-sm font-semibold tracking-widest uppercase text-cream-300">
            Hours
          </span>
        </div>

        <!-- Minutes Card -->
        <div class="glass-card-gold p-4 md:p-6 rounded-2xl border border-gold-400/40 text-center relative overflow-hidden group hover:border-gold-300 transition-all shadow-xl">
          <div class="absolute top-0 right-0 w-12 h-12 bg-gold-400/10 rounded-bl-full pointer-events-none"></div>
          <span class="block font-cinzel text-4xl sm:text-5xl md:text-6xl font-extrabold text-gold-300 text-gold-glow mb-1 transition-transform group-hover:scale-105">
            {{ formatNumber(timeLeft.minutes) }}
          </span>
          <span class="block font-sans text-xs md:text-sm font-semibold tracking-widest uppercase text-cream-300">
            Minutes
          </span>
        </div>

        <!-- Seconds Card -->
        <div class="glass-card-gold p-4 md:p-6 rounded-2xl border border-gold-400/40 text-center relative overflow-hidden group hover:border-gold-300 transition-all shadow-xl">
          <div class="absolute top-0 right-0 w-12 h-12 bg-gold-400/10 rounded-bl-full pointer-events-none"></div>
          <span class="block font-cinzel text-4xl sm:text-5xl md:text-6xl font-extrabold text-gold-400 text-gold-glow mb-1 transition-transform group-hover:scale-105 animate-pulse">
            {{ formatNumber(timeLeft.seconds) }}
          </span>
          <span class="block font-sans text-xs md:text-sm font-semibold tracking-widest uppercase text-cream-300">
            Seconds
          </span>
        </div>
      </div>

      <!-- Wedding Day Reached Message -->
      <div v-else class="glass-card-gold p-8 rounded-3xl border border-gold-400 max-w-xl mx-auto text-center">
        <Sparkles class="w-12 h-12 text-gold-400 mx-auto mb-3 animate-spin-slow" />
        <h3 class="font-cinzel text-2xl md:text-3xl font-bold text-gold-300 mb-2">
          Alhamdulillah! The Blessed Day Has Arrived
        </h3>
        <p class="text-cream-200 text-sm md:text-base">
          Join us today in celebrating the Wedding of Rasniya &amp; Afsad.
        </p>
      </div>

      <!-- Add to Calendar Button -->
      <div class="mt-10 flex items-center justify-center gap-4">
        <a
          :href="googleCalendarUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="px-6 py-3 rounded-full glass-card-gold text-gold-200 hover:text-gold-100 border border-gold-400/40 hover:border-gold-400 text-xs md:text-sm font-bold tracking-wider uppercase flex items-center gap-2 transition-all shadow-lg active:scale-95"
        >
          <CalendarPlus class="w-4 h-4 text-gold-400" />
          Add to Google Calendar
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { Clock, Sparkles, CalendarPlus } from 'lucide-vue-next'

// Target Date: August 30, 2026 4:00 PM (16:00:00)
const targetDate = new Date('2026-08-30T16:00:00+05:30')

const timeLeft = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
})

const isExpired = ref(false)
let timerInterval = null

const calculateTimeLeft = () => {
  const now = new Date()
  const diff = targetDate.getTime() - now.getTime()

  if (diff <= 0) {
    isExpired.value = true
    timeLeft.value = { days: 0, hours: 0, minutes: 0, seconds: 0 }
    if (timerInterval) clearInterval(timerInterval)
    return
  }

  isExpired.value = false
  timeLeft.value = {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / 1000 / 60) % 60),
    seconds: Math.floor((diff / 1000) % 60)
  }
}

const formatNumber = (num) => {
  return String(num).padStart(2, '0')
}

// Google Calendar sync link generator
const googleCalendarUrl = computed(() => {
  const title = encodeURIComponent('Wedding Reception of Rasniya & Afsad at Atlantis Convention Centre')
  const details = encodeURIComponent('Join us for the wedding celebration of Rasniya & Afsad at Atlantis Convention Centre, Vengara, Kerala!')
  const location = encodeURIComponent('Atlantis Convention Centre, Balanpeedika, Kannattipadi, Kacheripadi Road, Po, Vengara, Kerala 676304')
  const startTime = '20260830T103000Z' // 4:00 PM IST is 10:30 AM UTC
  const endTime = '20260830T153000Z'
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTime}/${endTime}&details=${details}&location=${location}`
})

onMounted(() => {
  calculateTimeLeft()
  timerInterval = setInterval(calculateTimeLeft, 1000)
})

onUnmounted(() => {
  if (timerInterval) clearInterval(timerInterval)
})
</script>
