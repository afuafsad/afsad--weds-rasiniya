<template>
  <section id="events" class="py-16 md:py-24 px-4 relative z-20">
    <div class="max-w-4xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-14">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card-gold text-xs uppercase tracking-widest text-gold-300 font-bold mb-3 border border-gold-400/30">
          <CalendarDays class="w-3.5 h-3.5 text-gold-400" />
          Event Itinerary &amp; Venue
        </div>
        <h2 class="font-cinzel text-3xl md:text-5xl font-bold text-gold-gradient tracking-wide mb-3">
          Joint Wedding Celebration
        </h2>
        <p class="font-sans text-sm md:text-base text-cream-200/90 max-w-lg mx-auto">
          Join us on Sunday, 30th August 2026 for a grand evening of celebration and feast for both couples.
        </p>
      </div>

      <!-- Main Event Details Card -->
      <div class="glass-card-gold p-8 md:p-12 rounded-3xl border border-gold-400/40 relative shadow-2xl hover:border-gold-300 transition-all mb-10">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-14 h-14 rounded-2xl bg-emerald-950 border border-gold-400/50 flex items-center justify-center text-gold-400 shadow-md">
            <UtensilsCrossed class="w-7 h-7" />
          </div>
          <div>
            <span class="text-xs font-cinzel font-bold text-gold-400 uppercase tracking-widest">Main Celebration</span>
            <h3 class="font-cinzel text-2xl md:text-3xl font-bold text-gold-200">
              Grand Joint Wedding Feast &amp; Reception
            </h3>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-y border-gold-400/20 text-sm text-cream-100 mb-6">
          <div class="flex items-center gap-3">
            <Calendar class="w-5 h-5 text-gold-400 flex-shrink-0" />
            <div>
              <span class="block text-[10px] text-gold-400/80 uppercase font-bold">Date</span>
              <span class="font-semibold">Sunday, 30th August 2026</span>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <Clock class="w-5 h-5 text-gold-400 flex-shrink-0" />
            <div>
              <span class="block text-[10px] text-gold-400/80 uppercase font-bold">Time</span>
              <span class="font-bold text-gold-300">4:00 PM Onwards</span>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <MapPin class="w-5 h-5 text-gold-400 flex-shrink-0" />
            <div>
              <span class="block text-[10px] text-gold-400/80 uppercase font-bold">Venue</span>
              <span class="font-semibold">Atlantis Convention Centre</span>
            </div>
          </div>
        </div>

        <p class="text-sm md:text-base text-cream-200/90 leading-relaxed">
          We warmly invite you and your family to grace the occasion with your blessings, enjoy traditional culinary delights, and celebrate the joint wedding of <strong class="text-gold-300">Afsad &amp; Rasniya</strong> and <strong class="text-gold-300">Shamnad &amp; Fabna Sherin</strong>.
        </p>
      </div>

      <!-- Venue Map & Location Card -->
      <div class="arch-frame glass-card-gold p-8 md:p-10 border border-gold-400/50 text-center relative overflow-hidden shadow-2xl">
        <div class="max-w-2xl mx-auto space-y-4">
          <div class="w-14 h-14 mx-auto rounded-full bg-emerald-950 border border-gold-400 flex items-center justify-center text-gold-300 shadow-lg">
            <MapPin class="w-7 h-7 text-gold-400 animate-bounce" />
          </div>

          <h3 class="font-cinzel text-2xl md:text-3xl font-bold text-gold-200">
            Atlantis Convention Centre
          </h3>
          <p class="font-sans text-sm md:text-base text-cream-200 leading-relaxed max-w-lg mx-auto">
            Balanpeedika, Kannattipadi, Kacheripadi Road, Po, Vengara, Kerala 676304
          </p>



          <!-- Directions Action Buttons -->
          <div class="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://maps.app.goo.gl/CgChbFE3zeVWFGeSA?g_st=awb"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full sm:w-auto px-8 py-3.5 rounded-full btn-gold font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-xl"
            >
              <Navigation class="w-4 h-4" />
              Open in Google Maps
            </a>
            <a
              :href="googleCalendarUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full sm:w-auto px-6 py-3.5 rounded-full glass-card-gold text-gold-200 hover:text-gold-100 font-medium text-sm tracking-wider uppercase flex items-center justify-center gap-2 border border-gold-400/40 hover:border-gold-400 transition-all"
            >
              <CalendarPlus class="w-4 h-4 text-gold-400" />
              Add to Calendar
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { CalendarDays, UtensilsCrossed, Calendar, Clock, MapPin, Navigation, CalendarPlus } from 'lucide-vue-next'

const googleCalendarUrl = computed(() => {
  const title = encodeURIComponent('Joint Wedding Reception of Afsad & Rasniya and Shamnad & Fabna Sherin')
  const details = encodeURIComponent('Joint Wedding Celebration & Reception of Afsad & Rasniya and Shamnad & Fabna Sherin. Atlantis Convention Centre, Vengara, Kerala.')
  const location = encodeURIComponent('Atlantis Convention Centre, Balanpeedika, Kannattipadi, Kacheripadi Road, Po, Vengara, Kerala 676304')
  const startTime = '20260830T103000Z'
  const endTime = '20260830T153000Z'
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTime}/${endTime}&details=${details}&location=${location}`
})
</script>
