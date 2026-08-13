<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-3"
    :class="[
      isScrolled
        ? 'bg-emerald-950/90 backdrop-blur-md border-b border-gold-500/30 shadow-lg py-2.5'
        : 'bg-gradient-to-b from-emerald-950/80 to-transparent'
    ]"
  >
    <div class="max-w-6xl mx-auto flex items-center justify-between">
      <!-- Dual Monogram Brand -->
      <a href="#hero" class="flex items-center gap-2 group">
        <div class="w-9 h-9 rounded-full bg-gold-gradient p-[1px] shadow-md group-hover:scale-105 transition-transform">
          <div class="w-full h-full bg-emerald-950 rounded-full flex items-center justify-center">
            <span class="font-cinzel text-[10px] font-bold text-gold-300">A&amp;S</span>
          </div>
        </div>
        <span class="font-script text-lg md:text-xl text-gold-300 tracking-wide font-bold">
          Afsad &amp; Shamnad's Joint Wedding
        </span>
      </a>

      <!-- Desktop Navigation Links -->
      <nav class="hidden md:flex items-center gap-6 text-sm font-medium text-cream-200">
        <a href="#hero" class="hover:text-gold-400 transition-colors">Home</a>
        <a href="#countdown" class="hover:text-gold-400 transition-colors">Countdown</a>
        <a href="#couples" class="hover:text-gold-400 transition-colors">The Couples</a>
        <a href="#events" class="hover:text-gold-400 transition-colors">Event Details</a>
        <a href="#rsvp" class="hover:text-gold-400 transition-colors">RSVP</a>
      </nav>

      <!-- Right Action Controls: Quick Share & Mobile Menu Toggle -->
      <div class="flex items-center gap-2 md:gap-3">
        <!-- Share Button -->
        <button
          @click="shareInvitation"
          class="p-2 rounded-full glass-card-gold text-gold-300 hover:text-gold-200 transition-all active:scale-95"
          title="Share Invitation"
        >
          <Share2 class="w-4 h-4" />
        </button>

        <!-- Mobile Menu Toggle -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 rounded-lg glass-card-gold text-gold-300 focus:outline-none"
        >
          <component :is="mobileMenuOpen ? X : Menu" class="w-5 h-5" />
        </button>
      </div>
    </div>

    <!-- Mobile Navigation Drawer -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="mobileMenuOpen"
        class="md:hidden mt-3 p-4 glass-card rounded-2xl border border-gold-500/30 flex flex-col gap-3 text-center text-cream-100 shadow-2xl"
      >
        <a href="#hero" @click="mobileMenuOpen = false" class="py-2 hover:text-gold-300 border-b border-emerald-800/50">Home</a>
        <a href="#countdown" @click="mobileMenuOpen = false" class="py-2 hover:text-gold-300 border-b border-emerald-800/50">Countdown</a>
        <a href="#couples" @click="mobileMenuOpen = false" class="py-2 hover:text-gold-300 border-b border-emerald-800/50">The Couples</a>
        <a href="#events" @click="mobileMenuOpen = false" class="py-2 hover:text-gold-300 border-b border-emerald-800/50">Wedding Schedule &amp; Venue</a>
        <a href="#rsvp" @click="mobileMenuOpen = false" class="py-2 hover:text-gold-300">RSVP Confirmation</a>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Share2, Menu, X } from 'lucide-vue-next'

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 30
}

const shareInvitation = async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: 'Joint Wedding Invitation | Afsad & Rasniya | Shamnad & Fabna Sherin',
        text: 'Join us in celebrating the joint wedding of Afsad & Rasniya and Shamnad & Fabna Sherin on August 30, 2026!',
        url: window.location.href
      })
    } catch (err) {
      console.log('Share canceled', err)
    }
  } else {
    try {
      await navigator.clipboard.writeText(window.location.href)
      alert('Invitation link copied to clipboard!')
    } catch (e) {
      alert('Link: ' + window.location.href)
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
