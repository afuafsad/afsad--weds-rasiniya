<template>
  <section id="rsvp" class="py-16 md:py-24 px-4 relative z-20">
    <div class="max-w-3xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card-gold text-xs uppercase tracking-widest text-gold-300 font-bold mb-3 border border-gold-400/30">
          <CheckCircle2 class="w-3.5 h-3.5 text-gold-400" />
          RSVP Confirmation
        </div>
        <h2 class="font-cinzel text-3xl md:text-5xl font-bold text-gold-gradient tracking-wide mb-3">
          Will You Join Us?
        </h2>
        <p class="font-sans text-sm md:text-base text-cream-200/90 max-w-md mx-auto">
          Please confirm your presence for the joint wedding feast of Afsad &amp; Rasniya and Shamnad &amp; Fabna Sherin.
        </p>
      </div>

      <!-- Form Card -->
      <div class="glass-card-gold p-6 md:p-10 rounded-3xl border border-gold-400/50 shadow-2xl relative overflow-hidden">
        <!-- Already Submitted Card View -->
        <div v-if="submitted" class="text-center py-8 space-y-4">
          <div class="w-16 h-16 rounded-full bg-emerald-900 border-2 border-gold-400 flex items-center justify-center mx-auto text-gold-400 shadow-xl">
            <CheckCircle2 class="w-10 h-10" />
          </div>
          <h3 class="font-cinzel text-2xl font-bold text-gold-200">
            Jazakallah Khair, {{ formData.name }}!
          </h3>
          <p class="text-cream-100 text-sm max-w-md mx-auto">
            Your RSVP status <span class="font-bold text-gold-300">"{{ formData.attending === 'yes' ? 'Joyfully Attending' : 'Regretfully Declining' }}"</span> for the joint wedding feast has been recorded. We look forward to celebrating together!
          </p>

          <div class="pt-4">
            <button
              @click="submitted = false"
              class="px-6 py-2.5 rounded-full glass-card text-gold-300 hover:text-gold-200 text-xs uppercase tracking-wider font-semibold border border-gold-400/30"
            >
              Edit My RSVP Response
            </button>
          </div>
        </div>

        <!-- RSVP Input Form -->
        <form v-else @submit.prevent="handleSubmit" class="space-y-6">
          <!-- Full Name -->
          <div>
            <label class="block font-cinzel text-xs font-bold text-gold-300 uppercase tracking-wider mb-2">
              Your Full Name <span class="text-gold-500">*</span>
            </label>
            <input
              v-model="formData.name"
              type="text"
              required
              placeholder="e.g. Brother Mohammed / Sister Fatima"
              class="w-full px-4 py-3 rounded-xl bg-emerald-950/80 border border-gold-400/30 text-cream-100 placeholder-cream-300/40 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 text-sm"
            />
          </div>

          <!-- Phone / Contact -->
          <div>
            <label class="block font-cinzel text-xs font-bold text-gold-300 uppercase tracking-wider mb-2">
              Phone Number / WhatsApp
            </label>
            <input
              v-model="formData.phone"
              type="tel"
              placeholder="+91 98765 43210"
              class="w-full px-4 py-3 rounded-xl bg-emerald-950/80 border border-gold-400/30 text-cream-100 placeholder-cream-300/40 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 text-sm"
            />
          </div>

          <!-- Attendance Options Radio -->
          <div>
            <label class="block font-cinzel text-xs font-bold text-gold-300 uppercase tracking-wider mb-2">
              Will You Attend The Joint Celebration? <span class="text-gold-500">*</span>
            </label>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label
                class="flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all"
                :class="formData.attending === 'yes' ? 'bg-emerald-900 border-gold-400 text-gold-200' : 'bg-emerald-950/60 border-gold-400/20 text-cream-200 hover:border-gold-400/40'"
              >
                <input type="radio" v-model="formData.attending" value="yes" class="accent-gold-500" />
                <span class="text-sm font-semibold">Yes, Joyfully Attending</span>
              </label>

              <label
                class="flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all"
                :class="formData.attending === 'no' ? 'bg-emerald-900 border-gold-400 text-gold-200' : 'bg-emerald-950/60 border-gold-400/20 text-cream-200 hover:border-gold-400/40'"
              >
                <input type="radio" v-model="formData.attending" value="no" class="accent-gold-500" />
                <span class="text-sm font-semibold">Regretfully Unable to Attend</span>
              </label>
            </div>
          </div>

          <!-- Guest Count (if attending) -->
          <div v-if="formData.attending === 'yes'">
            <label class="block font-cinzel text-xs font-bold text-gold-300 uppercase tracking-wider mb-2">
              Number of Attendees
            </label>
            <select
              v-model="formData.guests"
              class="w-full px-4 py-3 rounded-xl bg-emerald-950/80 border border-gold-400/30 text-cream-100 focus:outline-none focus:border-gold-400 text-sm"
            >
              <option value="1">1 Person (Just Me)</option>
              <option value="2">2 Persons</option>
              <option value="3">3 Persons</option>
              <option value="4">4 Persons or Family</option>
            </select>
          </div>

          <!-- Message / Dua for Couples -->
          <div>
            <label class="block font-cinzel text-xs font-bold text-gold-300 uppercase tracking-wider mb-2">
              Warm Blessing / Message for the Couples
            </label>
            <textarea
              v-model="formData.message"
              rows="3"
              placeholder="Write your prayers and warm wishes..."
              class="w-full px-4 py-3 rounded-xl bg-emerald-950/80 border border-gold-400/30 text-cream-100 placeholder-cream-300/40 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 text-sm"
            ></textarea>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            class="w-full py-4 rounded-full btn-gold font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl active:scale-95 transition-all"
          >
            <Send class="w-4 h-4" />
            Submit RSVP Confirmation
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { CheckCircle2, Send } from 'lucide-vue-next'

const submitted = ref(false)
const formData = ref({
  name: '',
  phone: '',
  attending: 'yes',
  guests: '2',
  message: ''
})

const handleSubmit = () => {
  if (!formData.value.name) return
  submitted.value = true
  localStorage.setItem('joint_wedding_rsvp', JSON.stringify(formData.value))
}

onMounted(() => {
  const saved = localStorage.getItem('joint_wedding_rsvp')
  if (saved) {
    try {
      formData.value = JSON.parse(saved)
      submitted.value = true
    } catch (e) {
      console.error(e)
    }
  }
})
</script>
