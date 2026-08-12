<template>
  <div class="min-h-screen bg-emerald-950 text-cream-100 selection:bg-gold-500 selection:text-emerald-950">
    <!-- Navbar -->
    <Navbar
      :is-playing="isPlayingAudio"
      @toggle-audio="toggleAudio"
    />

    <!-- Main Content Sections -->
    <main>
      <!-- Hero Section -->
      <HeroSection />

      <!-- Countdown Timer -->
      <CountdownTimer />

      <!-- Quranic Verse & Islamic Blessing -->
      <QuranicVerse />

      <!-- The Couple (Rasniya & Afsad) -->
      <CoupleSection />

      <!-- Event Schedule & Venue Map -->
      <EventSchedule />

      <!-- RSVP Form -->
      <RsvpForm />
    </main>

    <!-- Footer -->
    <FooterSection />

    <!-- Floating Actions for Mobile (Quick RSVP, Audio, Confetti) -->
    <FloatingActions
      :is-playing="isPlayingAudio"
      @toggle-audio="toggleAudio"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from '~/components/Navbar.vue'
import HeroSection from '~/components/HeroSection.vue'
import CountdownTimer from '~/components/CountdownTimer.vue'
import QuranicVerse from '~/components/QuranicVerse.vue'
import CoupleSection from '~/components/CoupleSection.vue'
import EventSchedule from '~/components/EventSchedule.vue'
import RsvpForm from '~/components/RsvpForm.vue'
import FooterSection from '~/components/FooterSection.vue'
import FloatingActions from '~/components/FloatingActions.vue'
import { toggleWebAudioMelody } from '~/utils/audioSynth.js'

const isPlayingAudio = ref(false)

const toggleAudio = () => {
  isPlayingAudio.value = toggleWebAudioMelody()
}
</script>
