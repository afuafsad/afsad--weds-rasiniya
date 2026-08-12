<template>
  <div class="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-md">
    <div class="glass-card-gold p-2 rounded-full border border-gold-400/50 shadow-2xl flex items-center justify-between gap-2 backdrop-blur-xl">
      <!-- Quick RSVP -->
      <a
        href="#rsvp"
        class="flex-1 py-2.5 px-4 rounded-full btn-gold text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all"
      >
        <CheckCircle2 class="w-4 h-4" />
        <span>RSVP</span>
      </a>

      <!-- Confetti Cannon Button -->
      <button
        @click="triggerConfetti"
        class="p-2.5 rounded-full bg-emerald-900 border border-gold-400/40 text-gold-300 hover:text-gold-100 active:scale-90 transition-transform shadow-md"
        title="Shower Blessings & Confetti"
      >
        <Sparkles class="w-5 h-5 text-gold-400 animate-spin-slow" />
      </button>

      <!-- Audio Toggle -->
      <button
        @click="$emit('toggle-audio')"
        class="p-2.5 rounded-full bg-emerald-900 border border-gold-400/40 text-gold-300 hover:text-gold-100 active:scale-90 transition-transform shadow-md"
        :title="isPlaying ? 'Pause Music' : 'Play Music'"
      >
        <component :is="isPlaying ? Volume2 : VolumeX" class="w-5 h-5 text-gold-400" />
      </button>

      <!-- Map Location -->
      <a
        href="#events"
        class="p-2.5 rounded-full bg-emerald-900 border border-gold-400/40 text-gold-300 hover:text-gold-100 active:scale-90 transition-transform shadow-md"
        title="Venue & Map"
      >
        <MapPin class="w-5 h-5 text-gold-400" />
      </a>
    </div>
  </div>
</template>

<script setup>
import { CheckCircle2, Sparkles, Volume2, VolumeX, MapPin } from 'lucide-vue-next'
import confetti from 'canvas-confetti'

defineProps({
  isPlaying: Boolean
})

defineEmits(['toggle-audio'])

const triggerConfetti = () => {
  // Gold & Emerald confetti burst
  confetti({
    particleCount: 80,
    spread: 70,
    origin: { y: 0.8 },
    colors: ['#f59e0b', '#fbbf24', '#d97706', '#047857', '#fde68a']
  })
}
</script>
